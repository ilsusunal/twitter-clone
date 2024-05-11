export default function ProfileSection(){
    return (
        <>
        <main className="flex items-center">
            <img src="https://picsum.photos/200/300" alt="" className="my-4 rounded-full mr-8 object-cover max-h-16"/>
            <div className>
                <p>fullName</p>
                <p>@userName</p>
            </div>
        </main>
        </>
    )
}