import Card from "../Card/Card";


export default function Home() {
    return (
        <>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <Card/>  
           <Card/>
           <Card/>
           <Card/> 
           
        </div>
           </>
    );
}
