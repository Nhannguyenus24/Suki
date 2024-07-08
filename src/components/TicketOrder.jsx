import React, { useState, useEffect } from 'react';
import '..assets/TicketOrder.css';
import { FaRegStar, FaStar } from 'react-icons/fa'; 

function Ticketorder(props) {
    const calculateTimeLeft = (date) => {
        const targetDate = new Date(date);
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.date));
    const [rating, setRating] = useState(props.star === -1 ? 0 : props.star);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(props.date));
        }, 1000);

        return () => clearInterval(timer);
    }, [props.date]);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const isEventEnded = !timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds;

    return (
        <div className="sidebar-activity">
            <h3>TICKET ORDER</h3>
            <ul>
                <li>Available: <span>{props.availableTickets}</span></li>
                <li>Ticket Order: <span>{props.ticketOrder}</span></li>
            </ul>
            <h3>TIME REMAIN</h3>
            <a href="#">
                <img src={props.timeIconSrc} alt="" />
                {isEventEnded ? (
                    <span>Event đã kết thúc</span>
                ) : (
                    `${timeLeft.days ? String(timeLeft.days) : '0'} days, 
                    ${timeLeft.hours ? String(timeLeft.hours).padStart(2, '0') : '00'}:
                    ${timeLeft.minutes ? String(timeLeft.minutes).padStart(2, '0') : '00'}:
                    ${timeLeft.seconds ? String(timeLeft.seconds).padStart(2, '0') : '00'}`
                )}
            </a>
            <div className="discover-more-link">
                <a href="#">Discover more</a>
            </div>
            <h3>RATING</h3>
            <div className="rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => handleRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            {index <= (hover || rating) ? (
                                <FaStar className="star" />
                            ) : (
                                <FaRegStar className="star" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Ticketorder;
