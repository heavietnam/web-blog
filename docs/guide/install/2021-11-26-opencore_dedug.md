---
title: Opencore Debug
subtitle: 
author: Võ Nguyễn Hoàng Long
date: 2021-11-26
---

Đây là phiên bản giúp bạn xem lỗi và dễ dàng fix lỗi.

B1: Tải OpenCorePKG version Debug tại đây.

<img src="https://i.imgur.com/B1D8Wh7.png">

B2: Các bạn sẽ tiền hành thay các file sau vào bộ EFI đang sử dụng (nếu chưa có EFI thì build theo link [tại đây](https://heavietnam.ga/2020/11/23/cach-tao-efi-cho-opencore).

- `BOOTx64.efi`
- `EFI/OC/Drivers/`
  - `OpenRuntime.efi`
  - `OpenCanopy.efi`
    `OpenCore.efi`

B3: chỉnh `config.plist` theo sau:

- Misc
  - AppleDebug: YES
  - ApplePanic: YES
    - Thường dùng kèm với `keepsyms=1` trong boot-arg
  - DisableWatchdog: YES
  - Target: 67 (khuyến khích nên chọn là 67).
    - B1: Đọc bảng sau  
      ![](https://i.imgur.com/0E1M5Gx.png)
    - B2: Tiến hành cộng các giá trị bạn chọn lại với nhau.
      - Ở đây mình sẽ cộng `0x01 + 0x02 + 0x40 = 0x43`
    - B3: Convert kết quả nhận được từ hex sang decimal bằng Hackintool.
      - `0x43 = 67   ![](https://i.imgur.com/TrjH8yS.png)`
  - DisplayLevel: 2147483714 (khuyến khích nên chọn 2147483714).
    - B1: Đọc bản sau  
      ![](https://i.imgur.com/jvDMN1k.png)
    - B2: Cộng các giá trị bạn đã chọn.
      - `0x00000002 + 0x00000040 + 0x80000000 = 0x80000042`
    - B3: Convert Hex to Decimal.
      - `0x80000042 = 2147483714`  
        ![](https://i.imgur.com/kpFMyDR.png)

B4: Thêm `-v` vào `boot-arg`

Như vậy là bạn đã có 1 bộ EFI Debug OpenCore (Clover cũng làm tương tự).
