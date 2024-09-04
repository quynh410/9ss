import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

const users= [
    {
        id:1,
        name:"Nguyễn Văn A",
    },
    {
        id:2,
        name:"Nguyễn Văn B",
    },
    {
        id:3,
        name:"Nguyễn Văn C",
    }
];

export async function GET(request:NextRequest, params: { params:{id:string, name:string}}) {
    //Bước 1 : lấy id của từng params
    const id = params.params.id
    //Bước 2 : Tìm kiếm user theo id trong mảng
    const user = users.find((users) => users.id == +id);
    // Bước 3 : trả về kết quả cho người dùng
    if(user){
        return NextResponse.json(user)
    } else{
        return NextResponse.json ({message:"Không tìm thấy tài khoản"})
    }

}

export async function PUT(request:NextRequest, params: { params:{id:string, name:string}}){
    // Bước 1 : lấy id của từng params
    const id = params.params.id
    const dataClient = await request.json();
    // Bước 2 : Tìm kiếm user theo id trong mảng
    const findIndex = users.findIndex((users) => users.id == +id);
    // Bước 2.1 : Cập nhật thông tin user
    if(findIndex !== -1){
        // Bước 3 : cập nhât dữ liệu , gán lại giá trị 
        users[findIndex].name = dataClient.name
        return NextResponse.json({data : users})
    }
}


{
    /*
        put : Cập nhật tất cả các trường 
        patch : Là cập nhập từng trường một
    */
}



export async function DELETE(request:NextRequest, params: { params:{id:string, name:string}}){
    // Bước 1 : lấy id của từng params
    const id = params.params.id
    const dataClient = await request.json();
    // Bước 2 : Lọc ra những bản ghi có id khác với id cần xóa
    const usersFilter = users.filter((users) => users.id!== +id);
    // Bước 3 : Trả về dữ liệu cho phía client 
    return NextResponse.json({newData:usersFilter})
}
