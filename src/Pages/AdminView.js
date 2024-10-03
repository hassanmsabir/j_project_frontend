import React, { useState } from 'react';
import axios from 'axios';

const AdminView = () => {
  // const [message, setMessage] = useState('');
  // const [momentTitle, setMomentTitle] = useState('');
  // const [momentDescription, setMomentDescription] = useState('');
  // const [momentDate, setMomentDate] = useState('');
  // const [momentImages, setMomentImages] = useState([]);

  // // Add Notification
  // const handleAddMessage = async () => {
  //   try {
  //     await axios.post('/api/notifications', { message });
  //     alert('Message added successfully');
  //     setMessage('');
  //   } catch (error) {
  //     console.error('Error adding message:', error);
  //   }
  // };

  // // Add Memorable Moment
  // const handleAddMoment = async () => {
  //   try {
  //     await axios.post('/api/moments', {
  //       title: momentTitle,
  //       description: momentDescription,
  //       date: momentDate,
  //       images: momentImages
  //     });
  //     alert('Memorable moment added successfully');
  //     setMomentTitle('');
  //     setMomentDescription('');
  //     setMomentDate('');
  //     setMomentImages([]);
  //   } catch (error) {
  //     console.error('Error adding moment:', error);
  //   }
  // };

  return (
    <div>
      {/* <h2>Admin View</h2>

      <div>
        <h3>Add a new message:</h3>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button onClick={handleAddMessage}>Add Message</button>
      </div>

      <div>
        <h3>Add a new memorable moment:</h3>
        <input
          type="text"
          value={momentTitle}
          onChange={(e) => setMomentTitle(e.target.value)}
          placeholder="Enter moment title"
        />
        <textarea
          value={momentDescription}
          onChange={(e) => setMomentDescription(e.target.value)}
          placeholder="Enter moment description"
        ></textarea>
        <input
          type="date"
          value={momentDate}
          onChange={(e) => setMomentDate(e.target.value)}
        />
        <input
          type="text"
          value={momentImages.join(', ')}
          onChange={(e) => setMomentImages(e.target.value.split(', '))}
          placeholder="Enter image URLs (comma separated)"
        />
        <button onClick={handleAddMoment}>Add Memorable Moment</button>
      </div> */}
    </div>
  );
};

export default AdminView;
