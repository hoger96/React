import React,{useState, useEffect} from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
//읽어오는건 useSelector
import {useSelector} from "react-redux";

const ContactList = () => {
  const contactList = useSelector(state => state.contactList);
  const {keyword} = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if(keyword != "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    }else{
      setFilteredList(contactList);
    }
  }, [keyword]);

  return (
    <div>
        <SearchBox />
        <div className ="contact-list">
          num:{filteredList.length}
          {filteredList.map((item) => (
            <ContactItem item={item} />
          ))}
        </div>
    </div>
  );
};

export default ContactList