"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const DEBOUNCE_MS = 350;

type Props = {
  categories: string[];
  initialSearch: string;
  initialCategory: string;
};

export function ProductSearch({
  categories,
  initialSearch,
  initialCategory,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);

  const currentSearch = useMemo(
    () => searchParams.get("q") ?? "",
    [searchParams]
  );
  const currentCategory = useMemo(
    () => searchParams.get("category") ?? "",
    [searchParams]
  );

  useEffect(() => {
    setQuery(initialSearch);
    setCategory(initialCategory);
  }, [initialSearch, initialCategory]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (query === currentSearch && category === currentCategory) {
        return;
      }

      const params = new URLSearchParams(Array.from(searchParams.entries()));

      if (query) {
        params.set("q", query);
      } else {
        params.delete("q");
      }

      if (category) {
        params.set("category", category);
      } else {
        params.delete("category");
      }

      params.delete("page");
      const queryString = params.toString();
      router.push(queryString ? `/?${queryString}` : "/");
    }, DEBOUNCE_MS);

    return () => window.clearTimeout(timer);
  }, [category, currentCategory, currentSearch, query, router, searchParams]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-[1.4fr,0.9fr] lg:grid-cols-[1.8fr,1fr]">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Search</span>
          <input
            type="search"
            placeholder="Search products by name..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:bg-white"
          >
            <option value="">All categories</option>
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
