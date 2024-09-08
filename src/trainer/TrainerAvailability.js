import React from 'react';
import TrainerNavbar from './TrainerNavbar';

function TrainerAvailability() {
  return (
    <div className="container mx-auto p-8">
      <TrainerNavbar />
      <main className="Availability-contrainer">
        
        {/* ส่วนแสดงหัวข้อ */}
        <>
          <h1 className="Availability-Update">
            Availability Update {/* อัปเดตเวลาว่าง */}
          </h1>
          <p>
            อัปเดตเวลาว่าง
          </p>
        </>

        {/* ส่วนของฟอร์ม */}
        <form className="form-detail">


          {/* ช่องเลือกวันที่ */}
          <>
            <div className="Program-training">
              โปรแกรมการฝึกสอน : {/* ข้อความบอกให้ผู้ใช้เลือกวัน */}
            </div>
            <div className="program">
              <input type="text" />
            </div>
            
          </>
          
          {/* ช่องเลือกวันที่ */}
          <>
            <div className="select-date">
              วันที่ต้องการฝึกสอน :{/* ข้อความบอกให้ผู้ใช้เลือกวัน */}
            </div>
            <div className="click-date">
              <input type="date" className="my-auto bg-transparent border-none" placeholder="วว/ดด/ปปปป" />
            </div>
          </>

          {/* ช่องเลือกเวลา */}
          <>
            <div className="select-time">
              เวลาที่ต้องการฝึกสอน {/* ข้อความบอกให้ผู้ใช้ระบุเวลา */}
            </div>
            <div className="click-time">
              <label htmlFor="startTime" className="text-black">
                ระบุเวลา :
              </label>
              <input
                type="time"
                id="startTime"
                className="grow shrink w-[166px] bg-transparent border-none"
                placeholder="กรุณาระบุเวลาเริ่ม"
              />
              <span className="self-start">-</span>
              <input
                type="time"
                id="endTime"
                className="grow shrink w-[753px] max-md:max-w-full bg-transparent border-none"
                placeholder="กรุณาระบุเวลาเลิก"
              />
            </div>
          </>

          {/* ปุ่มยกเลิกและบันทึก */}
          <div className="flex gap-10 self-end mt-40 whitespace-nowrap max-md:mt-10">
            <button type="button" className="my-auto text-gray-950">
              ยกเลิก {/* ปุ่มยกเลิก */}
            </button>
            <button
              type="submit"
              className="px-16 py-5 text-white rounded-md bg-black max-md:px-5"
            >
              บันทึก {/* ปุ่มบันทึก */}
            </button>
          </div>
        </form>

        {/* ส่วนแสดงเวลาว่าง */}
        <section className="mt-16 max-md:mt-10">
          <h2 className="self-center px-5 py-6 max-w-full text-2xl font-bold text-black rounded-md border border-solid bg-gray-100 border-black border-opacity-50 w-[1272px] max-md:pr-5">
            เวลาว่างทั้งหมด : {/* หัวข้อแสดงเวลาว่าง */}
          </h2>
          <div className="flex shrink-0 self-center max-w-full bg-white rounded-none border border-solid border-black border-opacity-50 h-[154px] w-[1272px]" />
        </section>
      </main>
    </div>
  );
}

export default TrainerAvailability;
