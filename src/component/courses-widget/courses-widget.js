import React from "react";
import "./courses-widget.css";

const CoursesWidget = ({ courses }) => (
    <div className="courses_widget">
        {courses.map(({ id, title, author, duration, image }) => (
            <div key={id} className="courses_widget__item">
                <img
                    className="courses_widget__item_image"
                    src={image}
                    alt={title}
                />
                <div className="courses_widget__item_content">
                    <div className="courses_widget__item_content_wrapper">
                        <span className="courses_widget__item_title">{title}</span>
                        <div className="courses_widget__item_info">
                            <span className="courses_widget__item_author">
                                {author}
                            </span>
                            <span className="courses_widget__item_duration">
                                {duration}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default CoursesWidget;
