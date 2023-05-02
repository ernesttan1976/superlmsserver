const coursesSeed = [
{
    "title": "Typescript by Web Dev Simplified",
    "description": "15 Youtube Videos Series on Typescript",
    "image": [{
        "name": "",
        "url": "https://i.ytimg.com/vi/jBmrduvKl5w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlV5w49TUHYevR-hne7kUvjHrxzw",
        "size": 0,
        "key": "",
        "uid": "",
    }],
    "startDate": new Date('2022-03-24T00:00:00'),
    "endDate": new Date('2099-03-24T00:00:00'),
    "price" : "15.98",
    "lessons_id":[
        {
            "title": "How To Build Your First TypeScript Project - TODO List Application",
            "description":"It is finally time that I create a full TypeScript project. In this video I show you how to create an entire TODO list application in TypeScript. I also show you how to get started with TypeScript in both a basic and advanced way.",
            "image": "https://i.ytimg.com/vi/jBmrduvKl5w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlV5w49TUHYevR-hne7kUvjHrxzw",
            "video": "https://www.youtube.com/watch?v=jBmrduvKl5w&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=1",
            "duration": 28,
        },
        {
            "title": "Can I Create This Typing Animation Using TypeScript?",
            "description":"Typing animations are incredibly popular on many sites (especially marketing/brochure sites). In this video I attempt to replicate the typing animations from my JavaScript Simplified course website in TypeScript without using a library. I think this will be a pretty easy project, but I am not the best with TypeScript so we shall see.",
            "image": "https://i.ytimg.com/vi/gWD0EJgBlYQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlvpeDkX6N2enKL_xyoDyVrAr9Ew",
            "video": "https://www.youtube.com/watch?v=gWD0EJgBlYQ&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=2",
            "duration": 27,
        },
        {
            "title": "How To Create An Advanced Shopping Cart With React and TypeScript",
            "description":"Shopping carts are one of the most common things you will build as a web developer, but there is a lot that goes into building a good shopping cart. In this video I will show you how to build a fully functional shopping cart using React, TypeScript, and Bootstrap. This is a great intermediate level project.",
            "image": "https://i.ytimg.com/vi/lATafp15HWA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCQAj9Tzud7cGebhChrLygKFddidg",
            "video": "https://www.youtube.com/watch?v=lATafp15HWA&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=3",
            "duration": 62,
        },
        {
            "title": "This Is The Perfect Project For Your React/TypeScript Resume",
            "description":"Select components are one of the most important components you will use in React, but how exactly do you create a good select component. In this video I will breakdown how to create a select component in React using only TypeScript and no additional React libraries.",
            "image": "https://i.ytimg.com/vi/bAJlYgeovlg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAfjj_vI-kSiH5ZxVPMGpWVG9KpEg",
            "video": "https://www.youtube.com/watch?v=bAJlYgeovlg&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=4",
            "duration": 46,
        },
        {
            "title": "Multistep Form Custom Hook With React And TypeScript",
            "description":"Multistep forms are a really common problem you need to solve in React, but there are no good ways to make it expandable to multiple forms. That is why I created this tutorial. It covers how to create a reusable React hook that can convert any existing set of forms into a multistep form.",
            "image": "https://i.ytimg.com/vi/uDCBSnWkuH0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdiHI8oOi5HZhBjL1fRYjEAWWFhw",
            "video": "https://www.youtube.com/watch?v=uDCBSnWkuH0&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=5",
            "duration": 29,
        },
        {
            "title": "This Is A Great Beginner React/TypeScript Project",
            "description":"Hangman is the perfect beginner React project since it is easy enough logic-wise, but still includes many complicated problems to solve. In this video I will show you how I would create a hangman game in React.",
            "image": "https://i.ytimg.com/vi/-ONUyenGnWw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD7kk3wdT0EEdhfytnVAPr-oLRAdg",
            "video": "https://www.youtube.com/watch?v=-ONUyenGnWw&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=6",
            "duration": 45,
        },
        {
            "title": "The Perfect Advanced React/TypeScript Project - Markdown Supported Note Taking With Categories",
            "description":"Todo lists are boring and pretty limited so in this video I am going to show you how to build a more advanced project that covers all the features of a todo list while also adding tons of additional features like categories, markdown support, filter, etc. This is a great intermediate to advanced project.",
            "image": "https://i.ytimg.com/vi/j898RGRw0b4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCM50y8PQRDqNb3nh_U5yrrIu9thA",
            "video": "https://www.youtube.com/watch?v=j898RGRw0b4&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=7",
            "duration": 74,
        },
        {
            "title": "Zod Makes TypeScript Even Better",
            "description":"Zod is amazing. It is not only an incredible validation library, but the direct interactions it has with TypeScript make it event better. Not having to define my types twice is a game changer and the simple yet powerful API of Zod is so nice. In this video I talk about what Zod is, show examples of how to use Zod, and talk about why it is so amazing.",
            "image": "https://i.ytimg.com/vi/9UVPk0Ulm6U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB3FI51DQ11rQE4i2Fr9m4xqsA0NQ",
            "video": "https://www.youtube.com/watch?v=9UVPk0Ulm6U&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=8",
            "duration": 7,
        },
        {
            "title": "Learn Zod In 30 Minutes",
            "description":"Zod is an amazing validation library that focuses on type safety and ease of use. I love Zod and feel that it makes TypeScript even better. It also makes working with user data incredibly easy and in this video I will show you everything you need to know about Zod.",
            "image": "https://i.ytimg.com/vi/L6BE-U3oy80/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAmZFi7O51RHxsXh_VVE7QJo6meqw",
            "video": "https://www.youtube.com/watch?v=L6BE-U3oy80&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=9",
            "duration": 31,
        },
        {
            "title": "What Is TanStack Router And Why I Love It",
            "description":"I love type safety, but have always been disappointed in the type safety of modern routers. That is until now. Tanstack Router is incredible at giving you a fully type safe router which makes coding so much nicer and easier. In this video I talk about what Tanstack Router is and how you can get started with it.",
            "image": "https://i.ytimg.com/vi/OwoZtv6u9p4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBGVXFZ_v1UnwpAsJDSYODFdmN3Ag",
            "video": "https://www.youtube.com/watch?v=OwoZtv6u9p4&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=10",
            "duration": 10,
        },
        {
            "title": "How To Build A Chat App With React And Stream",
            "description":"Building a chat application is hard, especially if you want it to be a robust and full featured app similar to Facebook Messenger. In this video I will show you how you can use Stream to build out an incredibly robust chat system with ease.",
            "image": "https://i.ytimg.com/vi/Een66E0X_os/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtAgM94v98dZSAV4TztHXxUEuMhw",
            "video": "https://www.youtube.com/watch?v=Een66E0X_os&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=11",
            "duration": 94,
        },
        {
            "title": "Is tRPC The End Of REST/GraphQL?",
            "description":"tRPC is an incredible library that makes working between your client and server so much nicer. The best part of tRPC is how it brings type safety to your API and client interactions which is something I have never seen done before (especially so well). In this video I talk about what tRPC is and why you should learn it.",
            "image": "https://i.ytimg.com/vi/lxnPMB0Jc7E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAt_CAdfWtyKR5enDtBikh0cSH4bQ",
            "video": "https://www.youtube.com/watch?v=lxnPMB0Jc7E&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=12",
            "duration": 14,
        },
        {
            "title": "Is Learning TypeScript A Waste Of Time?",
            "description":"TypeScript is quickly taking over JavaScript with more and more projects being built with TS each day. This may seem scary if you only know JavaScript, but you can actually start using TypeScript right now even if you have no experience with it. In this video I will talk about why you don’t need to learn TypeScript and how you can write TypeScript code in less than a day of studying.",
            "image": "https://i.ytimg.com/vi/GhKFQOA28Nk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB36_meXg_3YvE2JtUWoTcP49m1fg",
            "video": "https://www.youtube.com/watch?v=GhKFQOA28Nk&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=13",
            "duration": 9,
        },
        {
            "title": "TypeScript Makes You A Faster Developer",
            "description":"TypeScript is amazing. It makes you much more confident your code is correct and will almost always result in less bugs, but there is one big downside. It is slow to write. Or at least that is what people say. In reality I find writing TypeScript code is much quicker because of a few reasons covered in this video.",
            "image": "https://i.ytimg.com/vi/7P9sxqt7HfA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBIMVHEK5BVipy9IPrmnMi4iN_W_g",
            "video": "https://www.youtube.com/watch?v=7P9sxqt7HfA&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=14",
            "duration": 9,
        },
        {
            "title": "Did He Really Fix TypeScript?",
            "description":"TypeScript is incredible when it comes to writing code that you feel safe modifying and publishing. It does have some pitfalls, though, like the any type which is why many developers enable configuration options to disallow the any type. This is great, but TypeScript actually has some function built in that return the any type which can introduce subtle bugs to your code that you were not expecting. This is where Matt Pocock’s TS Reset library comes in. This fixes some of these less type safe features of TypeScript and makes it stricter and more secure.",
            "image": "https://i.ytimg.com/vi/C_v0fcGEGbA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDsSh04mCKu3IQW_BpUB6HPvFqJxg",
            "video": "https://www.youtube.com/watch?v=C_v0fcGEGbA&list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g&index=15",
            "duration": 8,
        },

    ],
    
},
{
"title": "Next.js Tutorial for Beginners by Dave Gray",
"description": "9 Youtube Videos Series on Next.js",
"image": [{
    "name": "",
    "url": "https://i.ytimg.com/vi/6h649f2fB9Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKt2MBs1wWUJD2-BUyHdrJwwhv2g",
    "size": 0,
    "key": "",
    "uid": "",
}],
"startDate": new Date('2023-01-17T00:00:00'),
"endDate": new Date('2099-01-17T00:00:00'),
"price" : "24.98",
"lessons_id":[
    {
        "title": "Next.js Tutorial for Beginners | Next.js 13",
        "description":"In this Next.js tutorial for beginners you will learn what Next.js is, the benefits of Next.js, why companies are choosing Next.js, and we will set up a starter Next 13 app to see how it works.",
        "image": "https://i.ytimg.com/vi/6h649f2fB9Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKt2MBs1wWUJD2-BUyHdrJwwhv2g",
        "video": "https://www.youtube.com/watch?v=6h649f2fB9Q&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=1",
        "duration": 17,
    },
    {
        "title": "Next.js Pages, Layout, Links, Routes & Loading | Next.js 13 tutorial",
        "description":"Learn about Next.js pages, layout, links, routes, loading, error handling and CSS modules in this Next.js 13 tutorial. Next.js has many built-in features to make building a full stack web app easier!",
        "image": "https://i.ytimg.com/vi/vuznUqirz5I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAhGG2irPv1DJfROQyfnI4t19UHRA",
        "video": "https://www.youtube.com/watch?v=vuznUqirz5I&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=2",
        "duration": 24,
    },
    {
        "title": "Next.js Data Fetching, Dynamic Routes & Metadata | Nextjs 13",
        "description":"Learn about Next.js Data Fetching, Dynamic Routes & Metadata in this third lesson of the Nextjs 13 tutorial series. We'll use server components to fetch data in parallel and apply suspense to progressively render the dynamic pages.",
        "image": "https://i.ytimg.com/vi/1n7slbDB1bQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrIdXCkqdYY8T2XVhHOZHBeQyA2w",
        "video": "https://www.youtube.com/watch?v=1n7slbDB1bQ&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=3",
        "duration": 43,
    },
    {
        "title": "Next.js 13 SSG, SSR & ISR | Nextjs 13 tutorial",
        "description":"Next.js 13 SSG, SSR & ISR all have benefits, but do you know how to choose between Static Site Generation (SSG), Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) for your server components?",
        "image": "https://i.ytimg.com/vi/E1HzFvXgrCs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCxGWNCLeI0PWBf3pacq5tF8XM_hg",
        "video": "https://www.youtube.com/watch?v=E1HzFvXgrCs&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=4",
        "duration": 17,
    },
    {
        "title": "Next.js Client Components | Build a Small Project with Nextjs 13",
        "description":"Learn when to use Next.js client components and build a small project with Nextjs 13. In this Next.js tutorial, we will apply what we have learned about server components and learn when to use client components in our Next.js projects.",
        "image": "https://i.ytimg.com/vi/PcHY2Py6AQY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAE4DYe7fTqGdfye3TGYNAAyO7-gg",
        "video": "https://www.youtube.com/watch?v=PcHY2Py6AQY&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=5",
        "duration": 43,
    },
    {
        "title": "Next.js Blog Website | How to Build a Blog App with Nextjs 13",
        "description":"Learn how to build a Next.js Blog Website with Nextjs 13. Building a Blog App is an excellent project to show how Next.js 13 can use Static Site Generation / SSG and Markdown files for performance and content.",
        "image": "https://i.ytimg.com/vi/puIQhnjOfbc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAPU58DzuG_UBk_g6kbqqyn4vPgLw",
        "video": "https://www.youtube.com/watch?v=puIQhnjOfbc&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=6",
        "duration": 55,
    },
    {
        "title": "Next.js Route Handlers | API Routes in Nextjs 13",
        "description":"Learn Next.js Route Handlers which replace API Routes in Nextjs 13. With Next.js, it is easy to create GET, POST, and more routes for full stack applications and retrieve the parameters sent with those requests.",
        "image": "https://i.ytimg.com/vi/xirQ7AMyTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCbkR6jwOnIYN2tdNi9TWmeH3fzwg",
        "video": "https://www.youtube.com/watch?v=xirQ7AMyTM8&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=7",
        "duration": 21,
    },
    {
        "title": "How to Build a REST API with Next.js 13",
        "description":"Learn how to Build a REST API with Next.js 13. In this tutorial, we will build a REST API with 5 API endpoints. We will also look at when you want to use an API in your Next.js application and when you don't.",
        "image": "https://i.ytimg.com/vi/-MFiza7ZRzs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAnv66z7Kszbip882BdCEZqkEffJQ",
        "video": "https://www.youtube.com/watch?v=-MFiza7ZRzs&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=8",
        "duration": 31,
    },
    {
        "title": "Next.js Middleware & Cors | Nextjs 13 tutorial",
        "description":"Learn how to apply Next.js middleware in Nextjs 13. You will learn about middleware at the edge runtime as well as middleware for route handlers and how to apply cors features without an extra dependency.",
        "image": "https://i.ytimg.com/vi/h4-2K7nFf7s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBZRcPAtE-s-kUNk6845YnilfmWAg",
        "video": "https://www.youtube.com/watch?v=h4-2K7nFf7s&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=9",
        "duration": 38,
    },
]
},
{
    "title": "React Hooks by Web Dev Simplified",
    "description": "16 Youtube Videos Series on React Hooks",
    "image": [{
        "name": "",
        "url": "https://i.ytimg.com/vi/O6P86uwfdR0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCjFfkCaia8DcMnohwQGVE9KfbciQ",
        "size": 0,
        "key": "",
        "uid": "",
    }],
    "startDate": new Date('2020-04-06T00:00:00'),
    "endDate": new Date('2099-04-06T00:00:00'),
    "price" : "19.98",
    "lessons_id":[
        {
            "title": "Learn useState In 15 Minutes - React Hooks Explained",
            "description":"In this video I cover everything you need to know about the useState hook. I also go over the basics of hooks as well so you can start using hooks in your own projects. This is the beginning of a series of React videos  where I cover all the important hooks in React.",
            "image": "https://i.ytimg.com/vi/O6P86uwfdR0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCjFfkCaia8DcMnohwQGVE9KfbciQ",
            "video": "https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=1",
            "duration": 16,
        },
        {
            "title": "Learn useEffect In 13 Minutes",
            "description":"In this video I cover everything you need to know about the useEffect hook. I compare this hook to the old way of doing things with lifecycle methods in class components so you can understand how to start using hooks effectively in your projects. This is part of a series of React videos where I cover all the important hooks in React.",
            "image": "https://i.ytimg.com/vi/0ZJgIjIuY7U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQLQ4KHORXiU7zu6Uaq8GMFrZZ_A",
            "video": "https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=2",
            "duration": 14,
        },
        {
            "title": "Learn useMemo In 10 Minutes",
            "description":"In this video I cover everything you need to know about the useMemo hook. I go over all the main use cases for useMemo as well as many common mistakes that developers make. This is part of a series of React videos where I cover all the important hooks in React.",
            "image": "https://i.ytimg.com/vi/THL1OPn72vo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD__ud37XyRJVKu6x38ETW8nZIPPQ",
            "video": "https://www.youtube.com/watch?v=THL1OPn72vo&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=3",
            "duration": 10,
        },
        {
            "title": "Learn useRef in 11 Minutes",
            "description":"In this video I cover everything you need to know about the useRef hook. I go over all the main use cases for useRef as well as many common mistakes that developers make. This is part of a series of React videos where I cover all the important hooks in React.",
            "image": "https://i.ytimg.com/vi/t2ypzz6gJm0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQ4k8PEmKO7_JMp4dvEfZXybaJsg",
            "video": "https://www.youtube.com/watch?v=t2ypzz6gJm0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=4",
            "duration": 11,
        },
        {
            "title": "Learn useContext In 13 Minutes",
            "description":"In this video I cover everything you need to know about the useContext hook. I go over all the main use cases for useContext as well as many common mistakes that developers make. This is part of a series of React videos where I cover all the important hooks in React.",
            "image": "https://i.ytimg.com/vi/5LrDIWkK_Bc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB_4Vpc9FUv5R1Htxu0R2Vw_h65sw",
            "video": "https://www.youtube.com/watch?v=5LrDIWkK_Bc&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=5",
            "duration": 16,
        },
        {
            "title": "Learn useReducer In 20 Minutes",
            "description":"In this video I cover everything you need to know about the useReducer hook. I go over all the main use cases for useReducer as well as many common mistakes that developers make. This is part of a series of React videos where I cover all the important hooks in React.",
            "image": "https://i.ytimg.com/vi/kK_Wqx3RnHk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDr2Xy3GcEdxmVRpB-JHfdyaDjLBg",
            "video": "https://www.youtube.com/watch?v=kK_Wqx3RnHk&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=6",
            "duration": 20,
        },
        {
            "title": "Learn useCallback In 8 Minutes",
            "description":"In this video I cover everything you need to know about the useCallback hook. I go over all the main use cases for useCallback as well as many common mistakes that developers make. This is part of a series of React videos where I cover all the important hooks in React.",
            "image": "https://i.ytimg.com/vi/_AyFP5s69N4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDX4mrPVx54GSKrm2Z5ceySZ5UbnQ",
            "video": "https://www.youtube.com/watch?v=_AyFP5s69N4&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=7",
            "duration": 8,
        },
        {
            "title": "Learn Custom Hooks In 10 Minutes",
            "description":"In this video I cover everything you need to know about creating your own custom hooks. I go over all the main use cases for custom hooks as well as many common mistakes that developers make when creating custom hooks. In this video I will cover two different examples of how custom hooks can best be used. This is part of a series of React videos where I cover all the important hooks in React.",
            "image": "https://i.ytimg.com/vi/6ThXsUwLWvc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD-y-rTyvTh3DA-10YyVCv_eho5qA",
            "video": "https://www.youtube.com/watch?v=6ThXsUwLWvc&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=8",
            "duration": 9,
        },
        {
            "title": "Learn useLayoutEffect In 5 Minutes",
            "description":"In this video I cover everything you need to know about the useLayoutEffect hook. I also compare useLayoutEffect to useEffect so you can know when to use which hook.",
            "image": "https://i.ytimg.com/vi/wU57kvYOxT4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCFKDGtMkPFPUFHf1OpUkfZAQ3zGA",
            "video": "https://www.youtube.com/watch?v=wU57kvYOxT4&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=9",
            "duration": 5,
        },
        {
            "title": "React 18 useTransition Hook Crash Course",
            "description":"React 18 recently had its official non-beta release and with it came multiple new React hooks. Of those hooks, the one I am most excited for is the useTransition hook. This hook helps increase the performance of your applications, increase the responsiveness of your application to users, and overall just make your application better. This video is all about how this new hook works.",
            "image": "https://i.ytimg.com/vi/N5R6NL3UE7I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBHtcSP2x7yodE5ZOOAgRYq-QiOaA",
            "video": "https://www.youtube.com/watch?v=N5R6NL3UE7I&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=10",
            "duration": 16,
        },
        {
            "title": "React 18 useDeferredValue Hook Crash Course",
            "description":"React 18 recently had its official non-beta release and with it came multiple new React hooks to help deal with concurrency and rendering slow content. One of those hooks is the useDeferredValue hook which is easy to use but difficult to understand. In this video I will help explain how this hook works so you can understand how and when to best use it.",
            "image": "https://i.ytimg.com/vi/jCGMedd6IWA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCh0HPxhUXOdeBJqmTvFI5IdaROWw",
            "video": "https://www.youtube.com/watch?v=jCGMedd6IWA&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=11",
            "duration": 8,
        },
        {
            "title": "Learn useImperativeHandle In 10 Minutes",
            "description":"The useImperativeHandle hook is one of the lesser used React hooks, but it serves a very important purpose when dealing with complex refs. In this video I go over 2 examples that explain how this hook works in both a simple and more complex real world example so you can truly master this hook.",
            "image": "https://i.ytimg.com/vi/zpEyAOkytkU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCA1Wqj4CqfWL-JcfqNZl29_lUA_A",
            "video": "https://www.youtube.com/watch?v=zpEyAOkytkU&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=12",
            "duration": 16,
        },
        {
            "title": "The Perfect Hook For Debugging Custom React Hooks",
            "description":"The useDebugValue hook is a very simple hook that serves one purpose, but it does that one thing very well. Because of its niche nature most people don’t learn it, but this hook can make debugging and building custom hooks a bit easier which is why I recommend learning it.",
            "image": "https://i.ytimg.com/vi/pTF86K8JZBQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLALCq6K8qEzHCXIW1tEh8-kFEM5Gw",
            "video": "https://www.youtube.com/watch?v=pTF86K8JZBQ&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=13",
            "duration": 16,
        },
        {
            "title": "The Easiest React Hook",
            "description":"The useId hook is a very simple hook that serves one purpose, but it does that one thing very well. This hook was introduced in React 18 and mostly overlooked due to the other more widely used hooks that came with React 18, but that does not mean this hook is useless. This hook is the perfect hook for creating random unique ids in your component and is the easiest hook in React to learn.",
            "image": "https://i.ytimg.com/vi/_vwCKV7f_eA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBx-MQZsNfcIdAoLtmL2_EBPfeMog",
            "video": "https://www.youtube.com/watch?v=_vwCKV7f_eA&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=14",
            "duration": 7,
        },
        {
            "title": "New React useEffectEvent Hook Crash Course",
            "description":"The newest React hook, useEffectEvent, is a really unique and interesting hook that make working with useEffect much easier. This is because it allows you to use variables, state, and props in your useEffect without having to declare them as dependencies for your useEffect.",
            "image": "https://i.ytimg.com/vi/NZJUEzn10FI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCn7CXeklXfMIhmusj6C4DMiUDSWQ",
            "video": "https://www.youtube.com/watch?v=NZJUEzn10FI&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=15",
            "duration": 8,
        },
        {
            "title": "This New React Hook Breaks All The Rules And I Love It",
            "description":"The newest React hook, use, is a really unique and interesting hook that breaks all the rules for hooks. This hook can be used conditionally and inside loops unlike any other hook. This hook also removes the need for many useEffect statements which I am a huge fan of.",
            "image": "https://i.ytimg.com/vi/zdNF9FJWJ8o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCd3SbQDrHnHFRmPsWlPBIEt31WQw",
            "video": "https://www.youtube.com/watch?v=zdNF9FJWJ8o&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=16",
            "duration": 8,
        },
    ],
},
]

module.exports = coursesSeed;