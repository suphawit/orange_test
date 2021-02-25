folder structure
form-component ใช้สำหรับ ใส่component ของform
library ที่ใช้ 
 lodash ใช้เกี่ยวกับutility ต่างเช่นการ for loop หรือ map array library
 react-hook-form ใช้ในการจัดการข้อมูลของformทำให้ การจัดการฟอร์มง่ายขึ้น และยังจัดการsubmitข้อมูลได้
  และจัดการvalidate แต่ละไฟล์ได้อย่างง่ายดายและมีประสิทธิภาพ
 little-state-machine ใช้ในการจัดการstate แต่ที่ต่างจากstate ของตัวreactเองคือ library นี้จะเก็บข้อมูลลงlocal storage และจัดการvalidate
  และนำมาใช้อีกครั้งในstateของlibrary นี้
 react-datepicker library ที่จัดการข้อมูลเกี่ยวกับวัน เวลาเดือนและปี
 styled-components จัดการเรื่องของcssให้ง่ายขึ้นด้วยการจัดการcssให้integrateรวมไปใน ตัวjs กับ htmlของ componentนั้นๆ
  ทำให้จัดการcssได้ง่ายมาก จะไม่มีปัญหาcssซ้อนทับ หรือ ชื่อ class ยาวๆอ่านยากเพราะ ตัวข้อมูล
  cssถูกติดให้ใช้ไปในเฉพาะของcomponentที่เราสร้างและยังสามารถนำcomponentที่สร้างมาใช้ได้ใหม่
 react-images-upload จัดการเกี่ยวกับข้อมูลรูปภาพ

การจัดการ state และการvalidate form
 ข้อมูลทั้งหมดของform จะทำผ่านทาง reach hook form library และจะ validateข้อมูล โดยเช็ค ในfield ที่
 ใช้ref ที่จะ ลงทะเบียนข้อมูลแต่ละfield ไว้ ซึ่งจะใส่เงื่อนไขที่จะvalidateแต่ละfieldไว้ ถ้าไม่ผ่านlibraryจะโฟกัส
 ไปยังfieldที่validateไม่ผ่านอัตโนมัติ ถ้าผ่าน react hook form จะเก็บข้อมูล ลง state
 
save draft 
    ใช้ watch()ซึ่งเป็นfunctonใน react hook formในการดูข้อมูลทั้งหมดในformนั้น และเก็บข้อมูลลงwebapi 


