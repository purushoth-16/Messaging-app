import React,{useState, useEffect } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption.js'
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add';
import {useStateValue} from './StateProvider'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import db from './firebase'
function Sidebar() {
    const[channels, setChannels]= useState([])
    const [{user}]=useStateValue()
    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot)=>(
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name
            })))
        ))
       
    }, [])
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                <h2>Lord Bruz</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    {user.displayName}
                </h3>
                </div>
                <CreateIcon/>
                

            </div>
            <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
            <SidebarOption Icon={InboxIcon}  title='Mention'/>
            <SidebarOption Icon={DraftsIcon}  title='Saved Items'/>
            <SidebarOption Icon={BookmarkBorderIcon}  title='Channel'/>
            <SidebarOption Icon={PeopleAltIcon}  title='People'/>
            <SidebarOption Icon={AppsIcon}  title='Apps'/>
            <SidebarOption Icon={FileCopyIcon}  title='Files'/>
            <SidebarOption Icon={ExpandLessIcon}  title='Show Less'/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon}  title='Channels'/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title='Add'/>
            {channels.map(channel=>(
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}
        </div>
    )
}

export default Sidebar
