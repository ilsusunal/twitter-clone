import mainPageIcon from '../../public/twitter-logo.svg';

export default function EnterPage(){
    return(
        <>
        <main>
            <section>
                {mainPageIcon}
            </section>
            <section>
                <form action="">
                    <input type="text" placeholder='mail'/>
                    <button>Enter</button>
                </form>
            </section>
        </main>
        <footer>
            <a href="">About</a>
            <a href="">Terms of Service</a>
            <p>Created by ilsu</p>
        </footer>
        </>
    )
}