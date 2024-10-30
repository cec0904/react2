"use client"
export default function StyledJsx2() {
    return(
        <>
            <button className="button">Styled JSX</button>
            <style jsx>{`
            .button {
                padding: 1em;
                border-radius: 1em;
                background: purple;
                color: white;
            }
            `}

            </style>
        </>
    )
}