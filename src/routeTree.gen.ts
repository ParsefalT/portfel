/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectsImport } from './routes/projects'
import { Route as ContactsImport } from './routes/contacts'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ProjectsRoute = ProjectsImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const ContactsRoute = ContactsImport.update({
  id: '/contacts',
  path: '/contacts',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/contacts': {
      id: '/contacts'
      path: '/contacts'
      fullPath: '/contacts'
      preLoaderRoute: typeof ContactsImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/contacts': typeof ContactsRoute
  '/projects': typeof ProjectsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/contacts': typeof ContactsRoute
  '/projects': typeof ProjectsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/contacts': typeof ContactsRoute
  '/projects': typeof ProjectsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/contacts' | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/contacts' | '/projects'
  id: '__root__' | '/' | '/contacts' | '/projects'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ContactsRoute: typeof ContactsRoute
  ProjectsRoute: typeof ProjectsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ContactsRoute: ContactsRoute,
  ProjectsRoute: ProjectsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/contacts",
        "/projects"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/contacts": {
      "filePath": "contacts.tsx"
    },
    "/projects": {
      "filePath": "projects.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
