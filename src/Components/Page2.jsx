import React, { useEffect, useState, useRef } from 'react'
import './Styling/Page2.css'
import axios from 'axios'
import getImage from '../Assets/GetInTouch.png'
import getImage1 from '../Assets/get.png'
import button1 from '../Assets/Button.png'
import arrow1 from '../Assets/Arrow 1.png'
import arrow2 from '../Assets/Arrow 2.png'
import hr from '../Assets/Group 17.png'
import copy from '../Assets/copy.png'
import new1 from '../Assets/new.png'

const Page2 = ({ selected }) => {
    const [data, setData] = useState([])
    const containerRef = useRef(null);
    const [err, setError] = useState([])
    const [costum, setCostum] = useState([])
    const [details, setDetails] = useState({
        name: "",
        mailId: "",
        messege: ""
    })
    const [isActive, setIsActive] = useState(true);
    const active = isActive ? 'active-head' : " ";
    useEffect(() => {
        const display = async () => {
            const res = await axios.get('https://fakestoreapi.com/products')
            setData(res.data)
        }
        display()
    }, [])
    const handleChange = (e) => {
        setDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const validate = () => {
        if (details.name && details.mailId && details.messege) {
            return true
        } else {
            return false
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            setCostum(prev => ({
                ...prev,
                details
            }))
            setDetails({
                name: "",
                mailId: "",
                messege: ""
            })
            console.log(details)
        } else {
            setError("All Fields Are Required.......!")
        }

    }
    const scrollToLeft = (x) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= x;
            console.log(x)
        }
    }
    const scrollToRight = (x) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += x;
            console.log(x)
        }
    }
    return (
        <div className="Page2-main">
            <div className='page2'>
                <div className='main-head'>
                    <div className='selecton-head'>
                        <div><img src={new1} id='new'></img></div>
                        <div className='arrow-div'><img
                            onClick={() => scrollToLeft(100)}
                            className='arrow' src={arrow2}>
                        </img><img className='arrow' onClick={() => scrollToRight(100)} src={arrow1}></img></div>
                    </div>
                    <img className='hr' src={hr}></img>
                </div>
                <div className="main-row ">
                    <div className="details">
                        <div><a href="" >Apparel</a></div>
                        <div><a href="" className={active}>Accessories</a></div>
                        <div><a href="" >Best Sellers</a></div>
                        <div><a href="" >50% Off</a></div>
                    </div>
                    <div className="main-row1" ref={containerRef}>
                        {data && data.map((x, i) => {
                            return (
                                selected.includes(x.category) &&
                                <div className='details1' key={i}>
                                    <img src={x.image} />
                                    <h4>{x.title}</h4>
                                    <p>{x.description}</p>
                                    <div className='price'>${x.price}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='footer'>
                    <div className="footer-1 footerd">
                        <div className="footer-1-sub1 footsub">
                            <h3>Newslleter</h3>
                            <p>Get news about articles and Updates in your inbox</p>
                        </div>
                        <div className="footer-1-sub2 footsub">
                            <input type='text' placeholder='NAME' value={details.name} name='name' onChange={e => handleChange(e)} />
                            <input type='gmail' placeholder='EMAIL' value={details.mailId} name='mailId' onChange={e => handleChange(e)} />
                            <input type='text' placeholder='MESSAGE' value={details.messege} name='messege' onChange={e => handleChange(e)} />
                            {err && <p className='err'>{err}</p>}
                        </div>
                    </div>
                    <div className="footer-2 footerd">
                        <div className='get'><img src={getImage}></img></div>
                        <div className='get1'><img src={getImage1}></img></div>
                        <div className="btn"onClick={e => handleSubmit(e)}><img src={button1}></img></div>
                    </div>
                    <div className='copy1'>
                        <img id='copy' src={copy}></img>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Page2