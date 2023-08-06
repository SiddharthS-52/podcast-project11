import "./ContentTypes.css";
import ContentTypesData from "./ContentTypesData";
import m1 from '../Assets/monologue1.jpg';
import m2 from "../Assets/monologue2.jpg";
import m3 from "../Assets/talkshow1.jpg";
import m4 from "../Assets/talkshow2.jpg";
import m5 from "../Assets/blogs1.jpg";
import m6 from "../Assets/blog2.jpg";

const ContentTypes = () => {
    return (
        <div className="contenttype">
            <h1>My Creations</h1>
            <p>Come Explore with me.</p>

            <ContentTypesData
                className= "first-des"
                heading= "Monologues"
                subheading1= "-Lucid Dreaming"
                subheading2= "-When all you could see is blood."
                subheading3= "-Embracing the Positive within Us."
                subheading4= "-And many more."
                img1 = {m1}
                // img1 = 'https://drive.google.com/file/d/1aNmpGuzLQvCx6M7NJDgIEQfivHTK48nc/view?usp=drive_link'
                img2 = {m2}
            />

            <ContentTypesData
                className= "first-des-reverse"
                heading= "Talk-Shows"
                subheading1= "-Journaling & Turing 20"
                subheading2= "-Introversion & Creativity"
                subheading3= "-Psychology & Indian Philosophy"
                subheading4= "-And many more."
                img1 = {m3}
                img2 = {m4}
            />

            <ContentTypesData
                className= "first-des"
                heading= "Blogs"
                subheading1= "-Veganism"
                subheading2= "-Nature: The Best Therapist"
                subheading3= "-Why not today ?"
                subheading4= "-And many more."
                img1 = {m5}
                img2 = {m6}
            />
        </div>
    )
}

export default ContentTypes;