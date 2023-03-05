//propos get passed from the App.js params
const Title = ({title, subtitle}) => {
    return (
    <>
    <div>
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
    </div>
    <div className="spacer"></div>
    </>
    )
}

export default Title