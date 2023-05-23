function ProjectBox({ imgName, box_name }) {
    return (
        <div className="project_box">
            <img src={imgName} alt=""/>
            <div className="overlay">
                <div className="content">
                <div className="text">First React Portfolio website centered around Matrix theme. Frontend Focus.</div>
                <a href="https://portfolio-3cd71.web.app/" className="button">Visit Website</a>
                </div>
            </div>

            <h2>{box_name}</h2>

        </div>
    );
}

export { ProjectBox };