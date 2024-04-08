import React from 'react'

const page = () => {
    const dialogues = [
        `
        Situation: Being Out and About
        Category: Leisure Activities
        Starts: "You wanna go out: you get ready, you pick out the clothes..."
        Ends: "Wherever you are in life, it's my feeling, you've gotta go."
        Summary: Jerry reflects on the enjoyment of being out and the preparations that go into it, highlighting the social aspect and the desire to continue being active.
        `,
        `
        Situation: Selecting Clothes
        Category: Personal Appearance & Fashion
        Starts: "Seems to me, that button is in the worst possible spot..."
        Ends: "You look like you live with your mother."
        Summary: Jerry critiques the placement of a button on George's shirt, showcasing their banter about clothing choices and personal appearance.
        `,
        `
        Situation: Discussing Plans with Friends
        Category: Interpersonal Relationships
        Starts: "How come you're not doin' the second show tomorrow?"
        Ends: "Maybe she wanted to be polite."
        Summary: George questions Jerry about a potential date, and they debate the intentions behind a phone call, revealing dynamics of friendship and understanding social cues.
        `,
        `
        Situation: Misinterpretations in Relationships
        Category: Interpersonal Relationships
        Starts: "I can't believe you're bringin' in an extra bed for a woman..."
        Ends: "No believe me, I'm always up at this hour."
        Summary: George questions Jerry's actions regarding a guest staying over, leading to humorous interactions and misunderstandings in their relationship discussions.
        `
    ]
    return (
        <>
            <h1>Episodes</h1>
            <ul>
                {dialogues.map(dialogue => <li key="a"><a href="/https://www.netflix.com/watch/80132845?t=115">{dialogue}</a></li>)}
            </ul>
        </>
      )
}

export default page