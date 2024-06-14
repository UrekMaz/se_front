import Menu_Component from "../../user/Menu_component";
import RHeader1 from "../../user/R1header";
import { useNavigate } from "react-router-dom";
function X() {
    return (
      <>
        <section className="add-dish-section" tabindex="0" role="button">
          + Add new dish
        </section>
        <style jsx>{`
          .add-dish-section {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            border: 1px solid rgba(13, 63, 32, 1);
            background-color: var(--Primary, #0d3f20);
            color: var(--White, #f9f9f9);
            padding: 10px 16px;
            font: 500 14px/140% 'Inter', -apple-system, Roboto, Helvetica, sans-serif;
            cursor: pointer;
            width:149px;
            height:30px;
            margin-top:12.24px;
            margin-left:167px
          }
        `}</style>
      </>
    );
  }
  
export default function Edit_Menu()
{
    const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/home");
  }
    return(
        <>
         <button onClick={handleClick} ><RHeader1 className="expand" message="Restaurant 1"/></button> 
         <X/> 
            <Menu_Component/>
        </>
    )
}