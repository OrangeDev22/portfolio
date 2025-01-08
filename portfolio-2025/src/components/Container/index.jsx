const Container = ({ children, id }) => {
  return (
    <div
      id={id}
      className='flex flex-col items-center justify-center my-32 gap-8 max-w-6xl mx-auto'
    >
      {children}
    </div>
  )
}

export default Container
