const Home = () => {
    functionHome = () => {
        const posts = [{
            id: 1,
            title: "Getting started with React and Tailwind CSS",
            author: "Sara Johnson",
            timeRead: "5 min read",
            postedOn: "2 hours ago",
            content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for styling.",
            image: "",
            profilePic: ""
        }, {
            id: 2,
            title: "The Future of Web Development",
            author: "Michael Chen",
            timeRead: "8 min read",
            postedOn: "5 hours ago",
            content: "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's essenntial for Web Development.",
            image: "",
            profilePic: ""
        }, {
            id: 3,
            title: "Mindful Living in a Digital Age",
            author: "Emily Rodriguez",
            timeRead: "6 min read",
            postedOn: "1 day ago",
            content: "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental wellness.",
            image: "",
            profilePic: ""
        }, {
            id: 4,
            title: "Building Scalable Node.js Applications",
            author: "Sara Johnson",
            timeRead: "5 min read",
            postedOn: "2 hours ago",
            content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for",
            image: "",
            profilePic: ""

        }]
    }
    return (
        <div className="gap-5">
            <div className="flex flex-col items-center justify-center  mt-7 gap-5">
                <h1 className="font-bold text-4xl">Welcome to BlogVerse</h1>
                <p className="font-normal text-xl text-gray-500 items-center justify-center mx-60">Discover amazing stories, insights, and ideas from our community of writers. Sign in to create your own posts and save your favorites.</p>
            </div>
           <div>{posts.map((post)=>(
                <div className="flex flex-row gap-5 p-20 w-3xl">
                    <div className="border-1 m-5 p-3 rounded-2xl" key={post.title}></div>
                    <div>{post.author}</div>
                    <div>{post.timeRead}</div>
                    <div>{post.postedOn}</div>
                    <div>{post.content}</div>
                    <div>{post.image}</div>
                    <div>{post.profilePic}</div>
                </div>
                ))
         
            }</div> 


        </div>
    )
}
export default Home