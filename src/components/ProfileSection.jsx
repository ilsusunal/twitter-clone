export default function ProfileSection(){
    return (
        <>
        <main className="flex items-center">
            <img src="https://picsum.photos/200/300" alt="" className="my-4 rounded-full mr-8 object-cover w-10 h-10"/>
            <div className>
                <p>fullName</p>
                <p>@userName</p>
            </div>
        </main>
        </>
    )
}