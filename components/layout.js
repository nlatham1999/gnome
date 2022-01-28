
export default function Layout({children}) {

    return (
        <div>
            <header>
                <a href='/'>gnome</a>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}