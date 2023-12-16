import Swal from "sweetalert2";
export const swal = (title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: false,
    timer: 1500,
  });
};
