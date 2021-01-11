export default () => {
  const isWorking = true;
  return (
    <div>
      {isWorking ? (
        <>Maybe take a break. Click → </>
      ) : (
        <>Well, back to work →</>
      )}{" "}
      <button onClick={toggleWorking}>REST A LITTLE</button>
    </div>
  );
};

{
  /* {isWorking ? (
  <>Maybe take a break. Click -> </> 
) : <>Well, back to work. Click -> </>} <button onClick={toggleWorking}>REST A LITTLE</button>
</div> 
  </div>) */
}
