import { useState } from 'react';
import Swal from 'sweetalert2';

const DeleteWork = () => {
  const [message, setMessage] = useState('');

  const deleteWork = async (id:string) => {
    try {
      const response = await fetch(`/api/work?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const result = await response.json();
        Swal.fire("Deleted!", "", "success");
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (error:any) {
      setMessage(`Request failed: ${error?.message}`);
    }
  };

  return (
    <div>



      <button onClick={() => Swal.fire({
  title: "Do you want to delete the company information?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Yes",
  denyButtonText: `No`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {

    deleteWork("")
  
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
})
}>
        Delete Work
      </button>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
};

export default DeleteWork;
