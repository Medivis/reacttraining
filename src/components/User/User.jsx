import React from 'react'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';
import Popup from '../../components/Popup/Popup';
import PopupOption from '../../components/Popup/PopupOption'
import UserApi from '../../api/user'
import { useLocalStorage } from '../../hooks/useStorage/useStorage'

export default function User(props) {

  const history = useHistory();
  const [user] = useLocalStorage("session.user")
  const colorString = `hsl(${user.color}, 50%, 60%)`

  function handleLogout() {
    UserApi.logout()
    history.push({pathname: "/login"})
  }

  function renderInitials(username) {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
    let initials = [...username.matchAll(rgx)] ?? [];
    return ((initials.shift()?.[1] ?? '') + (initials.pop()?.[1] ?? ''))
  }

  const avatar = <Avatar
    size={props.size}
    color={colorString}
  >{renderInitials(user.username)}
  </Avatar>

  if (props.hidePopup) return avatar

  return (
    <Popup align="right" button={avatar}>
      <Link to="/usersettings"><PopupOption>User Settings</PopupOption></Link>
      <PopupOption onClick={handleLogout}>Logout</PopupOption>
    </Popup>
  )
}
