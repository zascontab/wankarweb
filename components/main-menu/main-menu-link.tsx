export default function MainMenuLink({ url, label, active, callbackOnClick }: any) {
    return (
        <li className="nav-item" onClick={callbackOnClick}>
            <a className={`page-scroll ${active ? 'active' : ''}`} href={`/${url}`}>{label}</a>
        </li>
    )
}