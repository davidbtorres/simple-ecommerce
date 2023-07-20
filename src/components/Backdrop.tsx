type BackdropProps = {
  onClose: () => void
}

const Backdrop = ({ onClose }: BackdropProps) => {
  return (
    <div
      className="fixed inset-0 bg-black opacity-50 z-40"
      onClick={onClose}
    ></div>
  )
}

export default Backdrop
