function ProjectBoxThree({ imgName, box_name }) {
    return (
        <div className="project_box">
            <img src={imgName} alt=""/>
            <div className="overlay">
                <div className="content">
                <div className="text">React, NodeJs, and sequelize video website to upload, land, and watch videos. Backend focus.</div>
                <a href="https://github.com/DonaldBowler44/VideoServerSite" className="button">Visit Repository</a>
                </div>
            </div>

            <h2>{box_name}</h2>

        </div>
    );
}

export { ProjectBoxThree };