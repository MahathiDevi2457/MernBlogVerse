import NavBar from "./NavBar"
const Home = () => {
    function Home(){
        const posts = [{
            id: 1,
            title: "Getting started with React and Tailwind CSS",
            author: "Sara Johnson",
            timeRead: "5 min read",
            postedOn: "2 hours ago",
            content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for styling.",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }, {
            id: 2,
            title: "The Future of Web Development",
            author: "Michael Chen",
            timeRead: "8 min read",
            postedOn: "5 hours ago",
            content: "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's essenntial for Web Development.",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }, {
            id: 3,
            title: "Mindful Living in a Digital Age",
            author: "Emily Rodriguez",
            timeRead: "6 min read",
            postedOn: "1 day ago",
            content: "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental wellness.",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }, {
            id: 4,
            title: "Building Scalable Node.js Applications",
            author: "Sara Johnson",
            timeRead: "5 min read",
            postedOn: "2 hours ago",
            content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"

        }, {
            id: 5,
            title: "Building Scalable Node.js Applications",
            author: "Sara Johnson",
            timeRead: "5 min read",
            postedOn: "2 hours ago",
            content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"

        }, {
            id: 6,
            title: "Building Scalable Node.js Applications",
            author: "Sara Johnson",
            timeRead: "5 min read",
            postedOn: "2 hours ago",
            content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"

        }]
    }
    return (
        <div className="flex flex-col items-center pt-5 bg-gray-50 mt-7 ">
            <NavBar />
            <h1 className="font-bold text-4xl">Welcome to BlogVerse</h1>
            <p className="font-normal text-xl text-gray-500 items-center justify-center mx-60">Discover amazing stories, insights, and ideas from our community of writers. Sign in to create your own posts and save your favorites.</p>
            <div className="flex gap-10 justify-around mt-5">
                <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">Write a New Post</button>
                <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-800 shadow-md text-white rounded-md">View My Posts</button>
            </div>
            <div className="mt-5 flex gap-10 flex-wrap justify-centerw-full rounded-lg shadow-lg pb-5">
                {posts.map((post) => (
                    <div className="w-96 bg-white shadow-lg rounded-lg" key={post.id}>
                        <div className="relative">
                            <img className="rounded-t-lg shadow-lg h-52 w-96" src="{post.image}" alt="Writing" />
                            <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">Save</button>
                        </div>
                        <div className="flex gap-5 mt-3 px-2">
                            <img className="rounded-full shadow-lg h-12 w-12" src="{post.profilePic}" alt="Writing" />
                            <div>
                                <p className="font-semibold">{post.author}</p>
                                <p className="text-gray-500">{post.postedOn}-{post.timeRead}</p>
                            </div>
                        </div>
                        <div className="mt-3 px-3 flex flex-col gap-3">
                            <p className="text-2xl font-bold">{post.title}</p>
                            <p className="text-gray-600">{post.content}</p>
                        </div>
                        <div className="mt-3 mb-3 px-3 flex justify-end">
                            <button className="text-blue-500 hover:underline cursor-pointer">Read more</button>
                        </div>
                    </div>
                ))

                }</div>
        </div>
    )
}
export default Home