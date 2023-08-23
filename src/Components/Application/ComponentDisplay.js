import React, { useState } from 'react';
import './Style/Main_display.css'
import Draggable from 'react-draggable';
import Colors from './constants/theme';
import ReactPlayer from 'react-player';

const ComponentDisplay = ({ selectedItem }) => {
    const [prompt,set_prompt]=useState('')
    const [isPopupOpen_discussion, setIsPopupOpen] = useState(false);
    const [isPopupOpen_meeting_video,set_isPopupOpen_meeting_video]=useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            messages: 'Hi, what can you do for me...'
        },
        {
            id: 2,
            messages: 'I am the AI bot'
        },
        {
            id: 1,
            messages: 'Show me all the commands'
        }
    ]);
    const handle_submit = () => {
        if (prompt.trim() !== '') {
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    id: 1,
                    messages: prompt
                }
            ]);
            set_prompt('');
        }
    };
    const handle_discussion_button = () => {
        setIsPopupOpen(!isPopupOpen_discussion);
    };
    const handle_meeting_button = () => {
        set_isPopupOpen_meeting_video(!isPopupOpen_meeting_video);
    };


    return (
        <>
        <div className="component_container">
            <div className='messages_container'>
            {messages.map(message =>{
                if(message.id===1){
                    return(
                        <div className='User_message'>
                            {message.messages}
                        </div>
                    )
                }
                else if (message.id===2){
                        return(
                            <div className='bot_message'>
                                {message.messages}
                            </div>
                        )
                }
            })}
            </div>

            {!isPopupOpen_discussion&&(
                        <div className="room_discussion_hoverable">
                            <div className="room_discussion_button" onClick={handle_discussion_button}>
                                <p className="room_discussion_title">Room Discussion</p>
                            </div>
                        </div>
            )}
            {!isPopupOpen_meeting_video&&(
                        <div className="room_meeting_video_hoverable">
                            <div className="room_meeting_video_button" onClick={handle_meeting_button}>
                                <p className="room_meeting_video_title">Meeting Video</p>
                            </div>
                        </div>
            )}

            {isPopupOpen_discussion && (
                <Draggable>
                <div className="popup">
                    <button className="close_button" onClick={handle_discussion_button}>
                        Close
                    </button>
                    {/* Content for the popup */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '2px', border: '1px solid #ccc', marginBottom: '10px' }}>
                            <div className='Avatar' style={{ borderRadius: '100%', backgroundColor: 'gray', width: '50px', height: '50px' }} />
                            <div className='Details_of_user' style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Name of the User</p>
                                <p style={{ fontSize: '14px', color: `${Colors.secondary_light}` }}>Description of the user</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '2px', border: '1px solid #ccc', marginBottom: '10px' }}>
                            <div className='Avatar' style={{ borderRadius: '100%', backgroundColor: 'gray', width: '50px', height: '50px' }} />
                            <div className='Details_of_user' style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Name of the User</p>
                                <p style={{ fontSize: '14px', color: `${Colors.secondary_light}` }}>Description of the user</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '2px', border: '1px solid #ccc', marginBottom: '10px' }}>
                            <div className='Avatar' style={{ borderRadius: '100%', backgroundColor: 'gray', width: '50px', height: '50px' }} />
                            <div className='Details_of_user' style={{ display: 'flex', marginLeft: '10px', flexDirection: 'column' }}>
                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Name of the User</p>
                                <p style={{ fontSize: '14px', color: `${Colors.secondary_light}` }}>Description of the user</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Draggable>
            )}
            
            {isPopupOpen_meeting_video && (
                 <Draggable>
                 <div className="popup_room_meeting_video_">
                     <button className="close_button" onClick={handle_meeting_button}>
                         Close
                     </button>
                     {/* Video content for the popup */}
                     <div>
                         <ReactPlayer
                             url="https://f53112b70bc31005.mediapackage.ap-south-1.amazonaws.com/out/v1/41849dce38884e2da3c4c2b296958c3a/index.m3u8"
                             controls
                             width="100%"
                             height="auto"
                         />
                     </div>
                 </div>
             </Draggable>
            )}

            <div className="input_container">
            <button className="send_button mic">
                <svg width="25" height="25" viewBox="0 0 27 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.01704 14.7913V19.6544C2.01704 25.77 6.99508 30.7481 13.1107 30.7481C19.2264 30.7481 24.2044 25.77 24.2044 19.6544V14.7913H26.2214V19.6544C26.2214 26.5441 20.879 32.21 14.1194 32.7267L14.1192 37.983H19.1618V40H7.05962V37.983H12.1022L12.1021 32.7267C5.34246 32.2099 0 26.5441 0 19.6544V14.7913H2.01704ZM13.1107 0C18.115 0 22.1874 4.0724 22.1874 9.07667V19.1618C22.1874 24.1661 18.115 28.2385 13.1107 28.2385C8.10646 28.2385 4.03406 24.1661 4.03406 19.1618V9.07667C4.03406 4.0724 8.10646 0 13.1107 0Z" fill="white"/>
                </svg>
            </button>
                <input  type="text" placeholder="Type your Prompt...." className="input_text"  onChange={(e)=>{set_prompt(e.target.value)}}/>
            <button className="send_button" onClick={()=>{handle_submit(prompt)}}>
                <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1373 19.2518L18.5872 19.24M15.5824 7.41986L28.9232 14.0902C34.91 17.0836 34.8982 21.9745 28.9232 24.9797L15.5824 31.65C6.61396 36.1402 2.937 32.4632 7.42713 23.4947L9.40703 19.535L7.42713 15.5752C2.937 6.60668 6.60218 2.94151 15.5824 7.41986Z" stroke="white" stroke-width="2.10714" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            </div>
        </div>
        </>
    );
};

export default ComponentDisplay;