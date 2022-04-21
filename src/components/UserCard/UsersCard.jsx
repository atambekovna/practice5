import './UsersCard.css'
import UsersCardWrapper from './UsersCardWrapper'

function UsersCard (props){
    return(
        <UsersCardWrapper className='wrapper'>
            <div className='wallpaper-block' style={{backgroundColor: props.wallpaper}}>
             <div className='img-block' >
              <img src={props.profilePic}/>
            </div>
             </div>
            <div className='username'>
              <span >{props.username} {props.id}</span>
            </div>
            <span>About</span>
            <div>
              <span>{props.userInfo}</span>
            </div>
            <div>
                <b>web: <a href='#'>https://phin.dev</a></b><br></br>
                <b>twitter: <a href="#">https://twitter.com/phin</a></b>
            </div>
        </UsersCardWrapper>
        
    )

}

export default UsersCard