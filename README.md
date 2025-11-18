# Demo React Paginate Filter

A demo showcasing [`react-paginate-filter`](https://www.npmjs.com/package/react-paginate-filter) with **search**, **filtering**, **pagination**, and **responsive design**.

**npm:** https://www.npmjs.com/package/react-paginate-filter


## Quick Start

```bash
git clone https://github.com/olvanotjeanclaude/demo-paginate-filter.git
cd demo-paginate-filter
npm install
npm run dev
```

## Features

- Real-time search by name/role
- Role-based filtering (Admin/User)
- Paginated lists for large datasets
- TypeScript + Tailwind CSS
- Dark theme with Lucide icons

## Tech Stack

Next.js • TypeScript • Tailwind CSS • Faker.js • Lucide Icons

---

## How to Use

```tsx
const { paginatedData, search, setSearch, filters, setFilter, currentPage, totalPages, setCurrentPage } = 
  usePagination(users, { itemsPerPage: 10, searchKeys: ["name", "role"] });
```

## Screenshot

![Demo ](./public/user-directory.png)


---

## License

MIT • Built by [olvanotjeanclaude](https://github.com/olvanotjeanclaude)
