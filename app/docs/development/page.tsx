'use client'

import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function page() {
  const frontend = [
    {
      title: 'React.JS',
      description: 'Component-based JavaScript library for building user interfaces efficiently.',
      link: 'development/react',
      iconSrc: 'icons/web/react.svg'
    },
    {
      title: 'Angular',
      description: 'Robust TypeScript-based framework for scalable single-page applications.',
      link: 'development/angular',
      iconSrc: 'icons/web/angular.svg'
    },
    {
      title: 'Vue.JS',
      description: 'Lightweight progressive framework for building interactive web interfaces.',
      link: 'development/vue',
      iconSrc: 'icons/web/vue.svg'
    },
    {
      title: 'Svelte',
      description: 'Compiler-based UI framework with zero runtime overhead and reactivity.',
      link: 'development/svelte',
      iconSrc: 'icons/web/svelte.svg'
    },
    {
      title: 'Blazor',
      description: 'Web UI framework for building interactive web apps using C# and .NET instead of JavaScript.',
      link: 'development/blazor',
      iconSrc: 'icons/web/blazor.svg'
    },
    {
      title: 'Thymeleaf',
      description: 'Modern server-side Java template engine for web and standalone environments.',
      link: 'development/thymeleaf',
      iconSrc: 'icons/web/thymeleaf.svg'
    }
  ]

  const cross = [
    {
      title: 'React Native',
      description: 'Build native mobile apps using React and JavaScript codebase.',
      link: 'language/cplusplus',
      iconSrc: 'icons/web/native.svg'
    },
    {
      title: 'Flutter',
      description: 'Google’s UI toolkit for crafting natively compiled mobile apps.',
      link: 'language/javascript',
      iconSrc: 'icons/web/flutter.svg'
    },
    {
      title: 'Lynx',
      description: 'Minimal, fast UI toolkit designed for modern native apps.',
      link: '/python',
      iconSrc: 'icons/web/lynx.svg'
    }
  ]


  const libraries = [
    {
      title: 'ShadCN UI',
      description: 'Accessible, customizable components built with Radix and Tailwind CSS.',
      link: 'language/cplusplus',
      iconSrc: 'icons/web/shadcn.svg'
    },
    {
      title: 'Mantine',
      description: 'Modern React components library with native TypeScript support and themes.',
      link: 'language/javascript',
      iconSrc: 'icons/web/mantine.svg'
    },
    {
      title: 'Chakra UI',
      description: 'Flexible, accessible component library for building React applications quickly.',
      link: '/python',
      iconSrc: 'icons/web/chakra.svg'
    }
  ]

  const state = [
    {
      title: 'Redux',
      description: 'Predictable state container for JavaScript apps, often used with React.',
      link: 'state-management/redux',
      iconSrc: 'icons/web/redux.svg'
    },
    {
      title: 'Zustand',
      description: 'Minimal, scalable state management library for React with a simplified API.',
      link: 'state-management/zustand',
      iconSrc: 'icons/web/zustand.svg'
    }
  ]


  const full = [
    {
      title: 'Next.JS',
      description: 'React-based full-stack framework for building server-side rendered and static web applications.',
      link: 'fullstack/next',
      iconSrc: 'icons/web/next.svg'
    },
    {
      title: 'Remix',
      description: 'Modern full-stack React framework focused on web standards and fast, dynamic UX.',
      link: 'fullstack/remix',
      iconSrc: 'icons/web/remix.svg'
    },
    {
      title: 'Nuxt',
      description: 'Full-stack framework built on Vue.js for creating performant and scalable web applications.',
      link: 'fullstack/nuxt',
      iconSrc: 'icons/web/nuxt.svg'
    },
    {
      title: 'Astro.JS',
      description: 'Modern static site generator optimized for performance and minimal JavaScript.',
      link: 'fullstack/astro',
      iconSrc: 'icons/web/astro.svg'
    }
  ]


  const backend = [
    {
      title: 'Express',
      description: 'Minimal Node.js framework for building web apps and APIs.',
      link: 'development/express',
      iconSrc: 'icons/web/express.svg'
    },
    {
      title: 'Django',
      description: 'Python framework for clean, rapid, and secure web development.',
      link: 'backend/django',
      iconSrc: 'icons/web/django.svg'
    },
    {
      title: 'Flask',
      description: 'Simple Python micro-framework for small and flexible web apps.',
      link: 'backend/flask',
      iconSrc: 'icons/web/flask.svg'
    },
    {
      title: 'FastAPI',
      description: 'Modern Python framework for fast APIs using type hints.',
      link: 'backend/fastapi',
      iconSrc: 'icons/web/fastapi.svg'
    },
    {
      title: 'Spring',
      description: 'Comprehensive Java framework for secure, scalable web apps.',
      link: 'backend/spring',
      iconSrc: 'icons/web/spring.svg'
    },
    {
      title: 'Fastify',
      description: 'High-performance Node.js framework with low overhead and plugins.',
      link: 'backend/fastify',
      iconSrc: 'icons/web/fastify.svg'
    },
    {
      title: 'Ruby on Rails',
      description: 'Convention-based Ruby framework for full-stack web applications.',
      link: 'backend/rails',
      iconSrc: 'icons/web/rails.svg'
    },
    {
      title: 'Nest.JS',
      description: 'TypeScript-first Node.js framework for scalable server-side apps.',
      link: 'backend/nest',
      iconSrc: 'icons/web/nest.svg'
    },
    {
      title: 'Laravel',
      description: 'Elegant PHP framework for modern and expressive web apps.',
      link: 'backend/laravel',
      iconSrc: 'icons/web/laravel.svg'
    },
    {
      title: 'Phoenix',
      description: 'Elixir web framework optimized for performance and concurrency.',
      link: 'backend/phoenix',
      iconSrc: 'icons/web/phoenix.svg'
    }
  ]

  const crossfull = [
    {
      title: '.NET',
      description: 'Cross-platform Microsoft framework for web, cloud, and desktop apps.',
      link: 'backend/dotnet',
      iconSrc: 'icons/web/dotnet.svg'
    },
  ]

  const database = [
    {
      title: 'MongoDB',
      description: 'NoSQL document database for flexible and scalable apps.',
      link: '/development/mongodb',
      iconSrc: 'icons/web/mongodb.svg'
    },
    {
      title: 'PostgreSQL',
      description: 'Advanced open-source relational database with strong SQL support.',
      link: '/development/postgresql',
      iconSrc: 'icons/web/postgresql.svg'
    },
    {
      title: 'MySQL',
      description: 'Popular open-source relational database widely used in web apps.',
      link: '/development/mysql',
      iconSrc: 'icons/web/mysql.svg'
    },
    {
      title: 'SQLite',
      description: 'Lightweight, serverless SQL database used in embedded apps.',
      link: '/development/sqlite',
      iconSrc: 'icons/web/sqlite.svg'
    },
    {
      title: 'Redis',
      description: 'In-memory key-value store for caching, queues, and real-time data.',
      link: '/development/redis',
      iconSrc: 'icons/web/redis.svg'
    },
    {
      title: 'MariaDB',
      description: 'Drop-in MySQL replacement with improved performance, features, and open-source model.',
      link: '/development/mariadb',
      iconSrc: 'icons/web/mariadb.svg'
    },
  ]


  const dbtools = [
    {
      title: 'Mongoose',
      description: 'MongoDB object modeling for Node.js backend apps.',
      link: '/development/mongoose',
      iconSrc: 'icons/web/mongoose.svg'
    },
    {
      title: 'Prisma',
      description: 'Type-safe ORM for Node.js with SQL and MongoDB support.',
      link: '/development/prisma',
      iconSrc: 'icons/web/prisma.svg'
    },
    {
      title: 'Drizzle',
      description: 'Type-safe SQL ORM for TypeScript with a focus on simplicity.',
      link: '/development/drizzle',
      iconSrc: 'icons/web/drizzle.svg'
    },
    {
      title: 'SQL Alchemy',
      description: 'Feature-rich ORM and SQL toolkit for Python applications.',
      link: '/development/sqlalchemy',
      iconSrc: 'icons/web/sqlalchemy.svg'
    }
  ]

  const schema = [
    {
      title: 'Pydantic',
      description: 'Fast Python data validation using type hints and parsing logic.',
      link: '/development/pydantic',
      iconSrc: 'icons/web/pydantic.svg'
    },
    {
      title: 'Zod',
      description: 'TypeScript-first schema validation library with static type inference.',
      link: '/development/zod',
      iconSrc: 'icons/web/zod.svg'
    },
  ]


  const packages = [
    {
      title: 'NPM',
      description: 'Default package manager for Node.js with a vast ecosystem.',
      link: '/development/npm',
      iconSrc: 'icons/web/npm.svg'
    },
    {
      title: 'Gems',
      description: 'Package manager for Ruby, used to distribute Ruby libraries.',
      link: '/development/gems',
      iconSrc: 'icons/web/gems.svg'
    }
  ]

  const build = [
    {
      title: 'Vite',
      description: 'Fast front-end build tool and dev server for modern web apps.',
      link: '/development/vite',
      iconSrc: 'icons/web/vite.svg'
    }
  ]



  return (
    <div className='bg-black pt-20'>
      <div className='max-w-5xl mx-auto px-8 py-12'>

        <p className="text-white text-xl font-semibold mt-10 mb-4">Frontend Web Frameworks</p>
        <HoverEffect items={frontend} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Frontend Cross-Platform Frameworks</p>
        <HoverEffect items={cross} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">UI Libraries</p>
        <HoverEffect items={libraries} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">State Management Libraries</p>
        <HoverEffect items={state} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Backend Frameworks</p>
        <HoverEffect items={backend} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Full Stack Web Frameworks</p>
        <HoverEffect items={full} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Full Stack Cross Platform Frameworks</p>
        <HoverEffect items={crossfull} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Databases</p>
        <HoverEffect items={database} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Database Tools</p>
        <HoverEffect items={dbtools} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Schema Frameworks</p>
        <HoverEffect items={schema} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Package Managers</p>
        <HoverEffect items={packages} />

        <p className="text-white text-xl font-semibold mt-10 mb-4">Build Tools</p>
        <HoverEffect items={build} />

      </div>
    </div>

  )
}
