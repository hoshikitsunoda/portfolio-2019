---
slug: Utility-Function-to-Call-Axios
date: 2020-09-24T23:11:10.198Z
title: Utility Function to Call Axios
featuredImage: /assets/images/axios-util-09-24-20.png
tags:
  - react
  - typescript
  - axios
---
When intersecting with APIs, `axios` is one of the go-to ways to retrieve/post data for a lot of React users. In this article, I will be sharing a quick and convenient way to handle GET request in React using the `axios.create` method with YouTube API as an example. We will be sending a search term to YouTube API and get data for the first 5 videos that match the search term.

First thing first, let’s get a YouTube API key. You can follow this link for how to obtain the API key: <https://developers.google.com/youtube/v3/getting-started>

The endpoint you will be using is <https://www.googleapis.com/youtube/v3/search>

## Setting up the axios.create

After obtaining the API key, you are going to need to create a React project by running:

`create-react-app axios-create-example --typescript`

Once the project is ready, clean up the project by removing some of the files in the `/src` folder. I usually leave only `App.tsx`, `index.tsx`, and `react-app-env.d.ts` files and remove imports for the deleted files in each file.

Next, let’s install axios by running:

`npm install axios`

Once it’s installed, let’s create a `/utils` folder and create an `api.tsx` file in there. This file will hold the `axios.create` logic.

The first thing you need to do is import axios inside `api.tsx` file so you can actually use axios:

`import axios from ‘axios’`

Now let’s create a constant that holds the API key:

`const API_KEY = ‘YOUR_API_KEY_FROM_YOUTUBE’`

The API key should be set to an environmental variable if you are thinking of committing it to GitHub, check [this link](https://create-react-app.dev/docs/adding-custom-environment-variables/) if you are not familiar with it.

Then we are going to create an object that holds URL and params that are needed to access YouTube API and assign it to a config constant like so:

```typescript
// utils/api.tsx
const config = {
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
}
```

The baseURL is the base of an endpoint URL and params are set of data that you need to pass to YouTube API upon calling the GET method. The ‘part’ is a search resource properties that the API response will include, it is set to a ‘snippet’ in this case. ‘maxResults’ is the number of items that should be returned, and YouTube API will read the ‘key’ property to know you are authorized to use the API.

Since we initiated this project as a TypeScript project, let’s add an interface for this config object. It should look like:

```typescript
// utils/api.tsx
interface Params {
  baseURL: string
  params: {
    part: string
    maxResults: number
    key: string | undefined
  }
}
```

And let’s add this to a config constant like this:

```typescript
// utils/api.tsx
const config: Params = {
  //...
}
```

Now all you need to do is export the axios.create with the config object as an argument and the file should look like this:

```typescript
// utils/api.tsx
import axios from 'axios'

const API_KEY = `YOUR_API_KEY_FROM_YOUTUBE`

interface Params {
  baseURL: string
  params: {
    part: string
    maxResults: number
    key: string | undefined
  }
}

const config: Params = {
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
}

export default axios.create(config)
```

`axios.create` lets you create a new instance of axios with a custom config meaning you can call this exported function to perform CRUD operations like GET, POST, DELETE and PUT.

## Using the API function

We have axios.create set up and it’s time to use it in the app to retrieve YouTube videos. Let’s open `App.tsx` and import axios create function we just created:

```typescript
// App.tsx
import React, { useCallback, useState } from 'react'
import api from './utils/api'

//…
```

Inside the App component, we are going to create fetchVideosHandler to get a list of YouTube video data. This is going to be an async-await function and let’s use `useCallback` hook to avoid unnecessary re-fetching of the data. Your code for fetchVideosHandler should look like this:

```typescript
// App.tsx
const fetchVideosHandler = useCallback<(keyword: string) => Promise<void>>(
  async (keyword: string) => {
    try {
      // api call will be implemented here...      
    } catch (error) {
      console.log(error)
      throw new Error('Failed to fetch videos...')
    }
  },
  []
)
```

To use the API function we created in a separate file, we will call it like this:

```typescript
const fetchVideosHandler = useCallback<(keyword: string) => Promise<void>>(
  async (keyword: string) => {
    try {
      const { data } = await api.get<VideoDataArray>('/search', {
        params: {
          q: keyword,
        },
      })
      console.log(data)
    } catch (error) {
      console.log(error)
      throw new Error('Failed to fetch videos...')
    }
  },
  []
)
```

What's happening here is `api` function we imported from `utils/api.tsx` is exporting axios.create which allows you to create axios instances, `.get()` in this case, with `/search` path passed in. This `/search` will be combined with the baseURL we set in `api.tsx` and becomes a complete endpoint URL. And the `params` object that contains a keyword(search term) also gets passed to API and then returns video data. `axios.create()` gives you the ability to create all kinds of instances. More on it [here](https://github.com/axios/axios#creating-an-instance).

As you can see, this `fetchVideosHandler` function takes `keyword` as an argument. You can add input to your UI and create another handler to read input value and set it as a state then pass to `fetchVideosHandler` like this:

```jsx
// App.tsx inside App component
const [keyword, setKeyword] = useState('')

const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  setKeyword(event.target.value)
}

return (
  <div>
    <input
      type="text"
      placeholder="Search videos"
      onChange={inputChangeHandler}
    />
    <button
      onClick={() => fetchVideosHandler(keyword)}
    >
      Search
    </button>
  </div>
)
```

The above code will pick up whatever you enter in the input, store it as a `keyword` state, then `fetchVideosHandler` will be triggered along with the keyword as a param value when the search button is clicked.

## Conclusion

There are many ways to use axios and everyone has their go-to way to handle requests. This is a quick one I recently came across and thought it was useful. Hope some of you find this helpful and please share if you liked what you just read. Thank you!