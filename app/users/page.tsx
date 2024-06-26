import React from 'react'

const UsersPage = async () => {
    const dialogue1 = `
        Situation: Being Out and About
        Category: Leisure Activities
        Starts: "You wanna go out: you get ready, you pick out the clothes..."
        Ends: "Wherever you are in life, it's my feeling, you've gotta go."
        Summary: Jerry reflects on the enjoyment of being out and the preparations that go into it, highlighting the social aspect and the desire to continue being active.
        `

        const dialogue2 = 
        `
        Situation: Selecting Clothes
        Category: Personal Appearance & Fashion
        Starts: "Seems to me, that button is in the worst possible spot..."
        Ends: "You look like you live with your mother."
        Summary: Jerry critiques the placement of a button on George's shirt, showcasing their banter about clothing choices and personal appearance.
        `
        const dialogue3 = 
        `
        Situation: Discussing Plans with Friends
        Category: Interpersonal Relationships
        Starts: "How come you're not doin' the second show tomorrow?"
        Ends: "Maybe she wanted to be polite."
        Summary: George questions Jerry about a potential date, and they debate the intentions behind a phone call, revealing dynamics of friendship and understanding social cues.
        `
        const dialogue4 = 
        `
        Situation: Misinterpretations in Relationships
        Category: Interpersonal Relationships
        Starts: "I can't believe you're bringin' in an extra bed for a woman..."
        Ends: "No believe me, I'm always up at this hour."
        Summary: George questions Jerry's actions regarding a guest staying over, leading to humorous interactions and misunderstandings in their relationship discussions. 
        `
    return (
        <>
            <h1>Episodes</h1>
            <div>
                <a href="https://www.netflix.com/watch/80132845?t=115">
                    <h2> Dialogue 1</h2>
                    <p>{dialogue1}</p>
                </a>
            </div>
            <br></br>
            <div>
                <a href="https://www.netflix.com/watch/80132845?t=115">
                    <h2> Dialogue 2</h2>
                    <p>{dialogue2}</p>
                </a>
            </div>
            <br></br>
            <div>
                <a href="https://www.netflix.com/watch/80132845?t=115">
                    <h2> Dialogue 3</h2>
                    <p>{dialogue3}</p>
                </a>
            </div>
            <br></br>
            <div>
                <a href="https://www.netflix.com/watch/80132845?t=115">
                    <h2> Dialogue 4</h2>
                    <p>{dialogue4}</p>
                </a>
            </div>
        </>
      )
}

export default UsersPage