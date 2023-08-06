import "./BlogPic.css";
import BlogPicData from "../Components/BlogPicData";
import b1 from "../Assets/veganism.jpg";
import b2 from "../Assets/honesty.jpg";
import b3 from "../Assets/nature.jpg";
import b4 from "../Assets/affirmations.jpg";
import b5 from "../Assets/lucid dreaming.jpg";
import b6 from "../Assets/minimalism.jpg";
import b7 from "../Assets/parents.jpg";

function BlogPic() {
    return (
        <div className="blogpic">
            <h1>Latest Blogs</h1>
            <p>Here's some of the most amazing blogposts I made recently.</p>
            <div className="blogcard">
                <BlogPicData
                    url = "https://sh1.sendinblue.com/mk/sc/6I-hSblWmvQaSZ_5eAN1G7mUnmSKXgOKiafXbYKaC34FUR4k3tE81dR3W965uDkYdJzKZTpg53HSEUzMijVtLF7iu830"
                    image = {b1}
                    heading = "Veganism"
                    date = "12-05-2023"
                    // text = "As a vegetarian since childhood, I have always been conscious of the impact of my food choices on animals & the environment. While the decision to vegetarian may not be for everyone, I believe it is important to raise awareness about the atrocities caused to animals due to the non-vegetarians...."
                />
                <BlogPicData
                    url = "https://sh1.sendinblue.com/mk/sc/77p3LY19lP_aSjwHwwrGsNNdWm4mtq17sxqKAbAzRkyRZx3evRHZlP5R4Z72QMAU5c6xKzS1kP7D7XFITGfKusLDfnIm"
                    image = {b2}
                    heading = "The Idea of Honesty"
                    date = "12-05-2023"
                    // text = "You know ‘Parrots’ have a great capability of mimicking human words to a great accuracy. They can talk like a human, respond to lot of questions. They can sing, making them attractions at circuses. Some can even tell fortunes of people at many places. How do you think those parrots are able to do that...."
                />
                <BlogPicData
                    url = "https://sh1.sendinblue.com/mk/sc/TfaL3UzSLBIcHo-vncneofitnhuAfMmO8B09JZyyEKEfkhrW7Vcf8FpoaRV-lHprEZH34C9riEFLs_Yd2p2eXIKgaV6Q"
                    image = {b3}
                    heading = "The Bliss of Nature"
                    date = "12-05-2023"
                    // text = "Have you ever spent continuous 30 minutes in a forest, or country side, walking slowly, unbothered about your daily tasks, unbothered about your next day’s classes, and even carefree about how many likes you got on the post you did a few hours back ??...."
                />
                <BlogPicData
                    url = "https://sh1.sendinblue.com/mk/sc/bzZmz-a5BlywYkLPOjqlwXLBN9jYC7cqUtPbqZssFU3aTbmWi3iKvdncljQH97AQ3UDitIcm8iF3cK6F2rKWdo1emw0A"
                    image = {b4}
                    heading = "Affirmations: The Magic Spells"
                    date = "12-05-2023"
                    // text = "Have you ever heard of affirmations? These are powerful statements that you can repeat to yourself to improve your mood, boost your confidence, and achieve your goals. Affirmations have been around for centuries, but they are more popular now than ever before. In this newsletter, we will explore the magic of affirmations and how you can use them to transform your life...."
                />
                <BlogPicData
                    image = {b5}
                    heading = "The Reality: Lucid Dreaming"
                    date = "12-05-2023"
                    text = ""
                />
                <BlogPicData
                    image = {b6}
                    heading = "Minimalism"
                    date = "12-05-2023"
                    text = ""
                />
                <BlogPicData
                    image = {b7}
                    heading = "Parents: Angels around Us"
                    date = "12-05-2023"
                    text = ""
                />
            </div>
        </div>
    )
}

export default BlogPic;