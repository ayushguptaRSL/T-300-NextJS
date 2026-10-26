# Project Explorer

A lightweight project management portal built with Next.js App Router and TypeScript.

## Features Implemented

1. **Application Structure**:
   - Home (`/`)
   - About (`/about`)
   - Dashboard (`/dashboard`)
   - Projects (`/projects`)
   - Settings (`/settings`)

2. **Common Application Layout**:
   - Persistent top navigation bar in `app/layout.tsx` across all pages.

3. **Dashboard Experience**:
   - Dedicated dashboard layout in `app/dashboard/layout.tsx` with project shortcuts sidebar.

4. **Projects Module & Nested Routes**:
   - Project overview (`/projects/[id]`)
   - Team section (`/projects/[id]/team`)
   - Tasks section (`/projects/[id]/tasks`)
   - Activity log (`/projects/[id]/activity`)
   - Shared project header and tabs in `app/projects/[id]/layout.tsx`
   - Catch-all documentation route (`/projects/[id]/docs/[[...slug]]`) displaying requested path and segments.

5. **Server & Client Architecture (Query Parameters)**:
   - Server Component reads URL parameters (`search`, `status`).
   - Interactive Client Component `ProjectFilter` updates search parameters:
     - `/projects?search=nextjs`
     - `/projects?status=active`
     - `/projects?search=dashboard&status=completed`

6. **Loading Experience**:
   - App Router built-in loading mechanism in `app/projects/[id]/loading.tsx`.

7. **Error Handling**:
   - Built-in error boundary in `app/projects/[id]/error.tsx` and `app/projects/error.tsx` with friendly message and retry button.

8. **Streaming User Interface**:
   - Dashboard utilizes React `Suspense` for slow-loading `DashboardStats` and `DashboardActivity` components.

9. **Client-side Interactivity**:
   - Interactive `FavoriteButton` client component with persistent client-side state.
