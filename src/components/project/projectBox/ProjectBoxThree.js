function ProjectBoxTwo({ imgName, box_name }) {
    return (
        <div className="project_box">
            <img src={imgName} alt=""/>
            <div className="overlay">
                <div className="content">
                <div className="text">Java Android app with Firebase to monitor sleep activity and provide sleep statisics.</div>
                <a href="https://github.com/DonaldBowler44/sleepTrack" className="button">Visit Repository</a>
                </div>
            </div>

            <h2>{box_name}</h2>

        </div>
    );
}

export { ProjectBoxTwo };