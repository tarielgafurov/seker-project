import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import Spinner from '../../UI/Spinner';
import Button from '../../UI/button/Button';
import { getNextPhones } from '../../store/slices/userPhonesSlice';
import Hearts from '../../UI/Heart/Hearts';

const UserPhones = () => {

    const {isLodaing, userPhones, next} = useSelector((prevState)=>prevState.userPhones)
    const dispatch = useDispatch()

    const favoriteHeart=(e)=>{
      console.log(e);
      if(e && e===true){
        
      }
    }
  return (
    <div>
      <UserPhonesWrapper>
        {isLodaing && <Spinner/>}  
        {
          userPhones.map((el)=>(
              <UserPhonesStyle>
                <Hearts onChange={favoriteHeart} />
                  <div className='images'>
                      <img src={el.images.length>0 && el.images[0].image} alt="" />
                  </div>
                  <div>
                  <h1>{el.title}</h1>
                  <span>{el.description}</span>
                  <span>{el.characteristics}</span>
                  <span>{el.price}</span>
                  </div>
              </UserPhonesStyle>
          ))
        }
      </UserPhonesWrapper>
        {next &&<ButtonsCont>
          <Button 
          onClick={()=>dispatch(getNextPhones(next))}
            backgroundColor={"white"} 
            color={"#FC3A74"} 
            borderRadius={"30px"} 
            border="2px solid #FC3A74"
            padding={"10px 40px"}
          >
            Показать еще
          </Button>
        </ButtonsCont>}
    </div>
  )
}

export default UserPhones

const ButtonsCont=styled.div`
  margin-top: 60px;
  width: 46%;
  display: flex;
  justify-content: flex-end;
`

const UserPhonesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    width: 850px;
    justify-content: space-between;
`
const UserPhonesStyle = styled.div`
    width: 270px;
    height: 364px;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 1px;
    text-align: center;
    cursor: pointer;

    .images{
      width: 172px;
      height: 180px;
      border: 1px solid;
    }
    .images img{
      width: 170px;
      height: 180px;
    }
`