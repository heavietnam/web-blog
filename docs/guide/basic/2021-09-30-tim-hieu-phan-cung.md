---
title: Tìm hiểu Phần Cứng
subtitle: Xác định phần cứng hỗ trợ cài đặt Hackintosh
author: Võ Nguyễn Hoàng Long
date: 2021-09-30
---

## Chi tiết phần cứng hỗ trợ

### CPU

::: danger <v-icon name="co-amd" scale="4"/>

- Tất cả `CPU AMD` trên **laptop** đều không hỗ trợ cài đặt `Hackintosh`
  
  > 🤔 Bởi vì trên thị trường không tồn tại laptop `AMD` có card đồ hoạ hỗ trợ `Hackintosh`

- CPU AMD Bulldozer (15h), Jaguar (16h) and Ryzen (17h) CPUs hỗ trợ **Desktop**
  
  > ⚠️ Nhiều tính năng trên macos hoàn toàn ko hoạt động và 1 số bị lỗi trên CPU AMD bao gồm:
  > 
  > - Ảo hóa dựa trên Apple HV (VMWare, Parallels, Docker, Android Studio,….) bị vô hiệu hóa VirtualBox được hỗ trợ.
  > - Các phần mềm Adobe.
  > - Phần mềm 32-bit.
  > - Và 1 vài app audio.
:::


::: info <v-icon name="co-intel" scale="4"/>

- Mọi CPU Intel từ đời [Yonah](https://en.wikipedia.org/wiki/Yonah_(microprocessor)) đều được hỗ trợ

- CPU 32bit được hỗ trợ từ `10.4.1 --> 10.6.8`

- CPU 64bit được hỗ trợ từ `10.4.1+`

:::

::: details SEE hỗ trợ

- SSE3 : hỗ trợ tất cả các version OS X/macOS.
- SSSE3: hỗ trợ tất cả các version 64 bit OS X/macOS.
- SSE4: hỗ trợ 10.12+
- SSE4.2: hỗ trợ 10.14+

:::

::: details Firmware hỗ trợ

- 10.4.1-10.4.7 yêu cầu EFI32 (IA32)
- 10.4.8-10.7.5 hỗ trợ cả 32 bit lẫn 64 bit.
- 10.8+ yêu cầu EFI64 (X64).
- 10.7-10.9 yêu cầu OpenPartitionDxe.efi để có thể boot được vào phần vùng Recovery.

:::

::: details Yêu cầu của kernel

- 10.4-10.5 yêu cầu kext 32-bit do chỉ support 32-bit kernelspace.
- 10.6-10.7 support cả 32-bit và 64-bit.
- 10.8+ yêu cầu kext 64-bit do chỉ support 64-bit kernelspace.

::: details Nhân và luồng

- Từ 10.10 có thể không boot được với 24 luồng nó sẽ gặp lỗi `mp_cpus_call_wait() timeout` panic.
- Từ 10.11+ bị giới hạn 64 luồng.
- cpus=1 có thể là giải pháp giúp disable hyperthreading.

:::

::: warning Lưu ý

- Lilu yêu cầu version 10.8+ (đối với OS X thì nên dùng FakeSMC)
- Đối với version 10.6 và cũ hơn sẽ yêu cầu RebuildAppleMemoryMap.

:::

#### Bảng version hỗ trợ cài CPU Intel

| CPU-GEN                        | MIN VERSION               | MAX VERSION                   | GHI CHÚ               | CPUID       |
| ------------------------------ | ------------------------- | ----------------------------- | --------------------- | ----------- |
| Pentium 4                      | 10.4.1                    | 10.5.8                        | Only used in dev kits | 0x0F41      |
| Yonah                          | 10.4.4                    | 10.6.8                        | 32-Bit                | 0x0006E6    |
| Conroe, Merom                  | 10.4.7                    | 10.11.6                       | No SSE4               | 0x0006F2    |
| Penryn                         | 10.4.10                   | 10.13.6                       | No SSE4.2             | 0x010676    |
| Nehalem                        | 10.5.6                    | Current                       | N/A                   | 0x0106A2    |
| Lynnfield                      | 10.6.3                    | No iGPU support 10.14+        | 0x0106E0              |             |
| Westmere, Clarkdale, Arrandale | 10.6.7                    | 0x0206A0(M/H)                 |                       |             |
| Sandybirdge                    | 10.6.7                    | 0x0206A0(M/H)                 |                       |             |
| Ivy Bridge                     | 10.7.3                    | No iGPU support 11+           | 0x0306A0(M/H/G)       |             |
| Ivy Bridge-E5                  | 10.9.2                    | N/A                           | 0x0306E0              |             |
| Haswell                        | 10.8.5                    | 0x0306C0(S)                   |                       |             |
| Broadwell                      | 10.10.0                   | 0x0306D4(U/Y)                 |                       |             |
| Skylake                        | 10.11.0                   | 0x0506e3(H/S) 0x0406E3(U/Y)   |                       |             |
| kaby Lake                      | 10.12.4                   | 0x0906E9(H/S/G) 0x0806E9(U/Y) |                       |             |
| coffee Lake                    | 10.12.6                   | 0x0906EA(S/H/E) 0x0806EA(U)   |                       |             |
| Amber Whiskey Comet Lake       | 10.14.1                   | 0x0806E0(U/Y)                 |                       |             |
| Comet Lake                     | 10.15.4                   | 0x0906E0(S/H)                 |                       |             |
| Ice Lake                       | 0x0706E5(U)               |                               |                       |             |
| Rocket Lake                    | Requires Comet Lake CPUID | 0x0A0671                      |                       |             |
| Tiger Lake                     | N/A                       | N/A                           | Untested              | 0x0806C0(U) |

### GPU

::: danger GPU AMD

- Nhân GCN được hỗ trợ trên các phiên bản mới nhất

- Các APU AMD không được hỗ trợ.

- Nhân Lexa không được hỗ trợ chính thức.

- 

:::

::: tip GPU Nvdiva

- GeForce 900 series (Maxwell 9XX), GeForce 10 series (Pascal 10XX) được hỗ trợ giới hạn đến macOS 10.13 (High Sierra)

- GeForce 20 series, GeForce 16 series không được hỗ trợ.

- GeForce 30 series cũng không được hỗ trợ.

- GeForce 600 series, GeForce 700 series (Kepler) vẫn đang được hỗ trợ hiện tại là Monterey beta 9 (từ Monterey phải dùng tool Geforce-Kepler-patcher để patch không native, xem hướng dẫn [tại đây](https://heavietnam.ga/2021/09/29/xxiipatch-card-do-hoa-nvidia/))

:::

::: info GPU Intel

- iGPU GT2 được hỗ trợ.

- GMA series được hỗ trợ 1 số dòng, xem chi tiết [tại đây](https://heavietnam.ga/2021/10/22/patch-gma-gpu/).

- iGPU GT1 trên pentium, Celerons và Atoms không được hỗ trợ.

:::

#### Bảng hỗ trợ iGPU intel

| GPU                    | MIN VERSION | MAX VERSION                                      | GHI CHÚ                                                  |
| ---------------------- | ----------- | ------------------------------------------------ | -------------------------------------------------------- |
| 3rd Gen GMA            | 10.4.1      | 10.7.5                                           | Requires 32-bit kernel and patches                       |
| 4th Gen GMA            | 10.5.0      |                                                  |                                                          |
| Arrandale(HD Graphics) | 10.6.4      | 10.13.6                                          | Only LVDS is supported, eDP and external outputs are not |
| Sandy Bridge(HD 3000)  | 10.6.7      | N/A                                              |                                                          |
| Ivy Bridge(HD 4000)    | 10.7.3      | 11.6.1                                           |                                                          |
| Haswell(HD 4XXX, 5XXX) | 10.8.5      | Current                                          |                                                          |
| Broadwell(5XXX, 6XXX)  | 10.10.0     |                                                  |                                                          |
| Skylake(HD 5XX)        | 10.11.0     |                                                  |                                                          |
| Kaby Lake(HD 6XX)      | 10.12.4     |                                                  |                                                          |
| Coffee Lake(UHD 6XX)   | 10.13.6     |                                                  |                                                          |
| Comet Lake(UHD 6XX)    | 10.15.4     |                                                  |                                                          |
| Ice Lake(Gx)           | 10.15.4     | Requires `-igfxcdc` and `-igfxdvmt` in boot-args |                                                          |
| iger Lake(Xe)          | N/A         | N/A                                              | No drivers available                                     |
| Rocket Lake            | N/A         | N/A                                              | No drivers available                                     |

#### Bảng hỗ trợ iGPU AMD

| GPU           | MIN VERSION | MAX VERSION                             | GHI CHÚ               |
| ------------- | ----------- | --------------------------------------- | --------------------- |
| X800          | 10.3.x      | 10.7.5                                  | yêu cầu kernel 32 bit |
| X1000         |             |                                         |                       |
| TeraScale     | 10.4.x      | 10.13.6                                 |                       |
| TeraScale 2/3 | 10.6.x      |                                         |                       |
| GCN 1         | 10.8.3      | Current                                 |                       |
| GCN 2/3       | 10.10.x     |                                         |                       |
| Polaris 10,20 | 10.12.1     |                                         |                       |
| Vega 10       | 10.12.6     |                                         |                       |
| Vega 20       | 10.14.5     |                                         |                       |
| Navi 10       | 10.15.1     | yêu cầu `agdpmod=pikera` trong boot-arg |                       |
| Navi 20       | 11.4        | Hiện tại 1 vài navi 21 vẫn hoạt động    |                       |

#### Bảng hỗ trợ dGPU Intel

| GPU       | MIN VERSION | MAX VERSION                                                                       | GHI CHÚ                                                                                                   |
| --------- | ----------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| GeForce 6 | 10.2.x      | 10.7.5                                                                            | yêu cầu kernel 32 bit và [NVCAP patching](https://heavietnam.ga/2021/09/29/xiii-fix-connect-hdmi/)        |
| GeForce 7 | 10.4.x      | [yêu cầu NVCAP patching](https://heavietnam.ga/2021/09/29/xiii-fix-connect-hdmi/) |                                                                                                           |
| Tesla     | 10.4.x      | 10.13.6                                                                           |                                                                                                           |
| Tesla v2  | 10.5.x      |                                                                                   |                                                                                                           |
| Fermi     | 10.7.x      |                                                                                   |                                                                                                           |
| Kepler    | 10.7.x      | current                                                                           | [macos 12 yêu cầu Geforce-Kepler-patcher](https://heavietnam.ga/2021/09/29/xxiipatch-card-do-hoa-nvidia/) |
| Kepler v2 | 10.8.x      |                                                                                   |                                                                                                           |
| Maxwell   | 10.10.x     | 10.13.6                                                                           | [yêu cầu NVIDIA Web Drivers](https://heavietnam.ga/2021/09/29/xxiipatch-card-do-hoa-nvidia/)              |
| Pascal    | 10.12.4     |                                                                                   |                                                                                                           |
| Turing    | N/A         | N/A                                                                               | No drivers available                                                                                      |
| Ampere    |             |                                                                                   |                                                                                                           |

### Bo mạch chủ (Motherboard)

Hầu hết các bo mạch chủ đều được hỗ trợ miễn là CPU được hồ trợ. Hồi trước các main B550 gặp 1 vài vấn đề, tuy nhiên hiện nay các bạn chỉ cần thêm [SSDT-CPUR](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-CPUR.aml) và SetupVirtualMap=false.

### Ổ cứng

Phần lớn các ổ cứng đều được hỗ trợ ngoại trừ một số dòng sau đây:

- Các ổ Samsung PM981, PM991 and Micron 2200S NVMe SSDs hỗ trợ không tốt do đó bạn cần [NVMeFix.kext](https://github.com/acidanthera/NVMeFix/releases) trong EFI ==> OC ==> Kext và snaps hoặc EFI ==> Clover ==> Kext ==> other

- Tuy nhiên ổ Samsung 970 EVO Plus NVMe SSDs trước đó gặp 1 vài vấn đề nhưng ở bản FIRMWARE mới nhất đã được fix các bạn có thể tải [ở đây](https://www.samsung.com/semiconductor/minisite/ssd/download/tools/).

- Intel 600p hỗ trợ không tốt nó có rất nhiều bug (khuyến khích nên tránh | cần [NVMeFix](https://github.com/acidanthera/nvmefix) để khởi động).

### NIC (Card mạng LAN)

Hầu hết đều được hỗ trợ tốt (xem bài patch LAN [ở đây](https://heavietnam.ga/2021/09/29/viii-fix-ethernet/))

Tuy nhiên 1 số card vẫn gặp lỗi, ví dụ:

- Intel I225 2.5Gb NIC trên các dòng Desktop cao cấp Comet Lake các bạn có thể tham khảo cách fix [tại đây](https://www.hackintosh-forum.de/forum/thread/48568-i9-10900k-gigabyte-z490-vision-d-er-l%C3%A4uft/?postID=606059#post606059).
- Intel I350 1Gb server NIC được tìm thấy trên các dòng intel và Supermicro server và đây là cách fix các bạn add mục:

```bash
PciRoot(0x0)/Pci(0x1,0x1)/Pci(0x0,0x0) | dictionray -> device-id | data | 33150000
```

Đôi khi các bạn sẽ gặp kernel panic xem cách fix chi tiết [tại đây](https://github.com/dortania/bugtracker/issues/213).

- Intel 10Gb server NICs cách fix cho các dòng X520 and X540 chipsets [tại đây](https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/).

### WiFi và Bluetooth

Hầu hết đều được hỗ trợ bao gồm các card:

- Intel
- Broadcom
- Atheros

> Xem chi tiết [tại đây](https://heavietnam.ga/2021/09/29/vii-fix-wifi-va-bluetooth/).

## Xác định phần cứng

### CPU

Ta dễ thấy đối với những guide hướng dẫn hackintosh hiện nay hầu hết đều dùng `Code Name` . Để xác định được `code name` của CPU và `iGPU` ta làm như sau:

- **B1**: Bạn chuột phải vào biểu tượng `windows` ở góc dưới cùng bên trái và chọn `system`.
  
  ![](https://i.imgur.com/3QEza7m.png)

- **B2:** Copy mục `processor`.
  
  ![](https://i.imgur.com/wwrPl8K.png)

- **B3:** Ta tiến hành search mục `processor` trên trình duyệt.
  
  ![](https://i.imgur.com/wdh3pK5.png)

- **B4:** Các bạn tiến hành mở kết quả tìm kiếm có domain là `ark.intel.com`
  
  ![](https://i.imgur.com/HeOXlJI.png)

- **B5:** Bạn sẽ chú ý vào phần `tên mã` hoặc `code name`. Đây chính là `code name CPU` của bạn.
  
  ![](https://i.imgur.com/OADzcWa.png)
  
  > như ở đây ta có code name là Comet Lake

### iGPU

Để có thể patch được `i`GPU thì ta phải xác định được `iGPU name.` Làm như sau:

- **B1:** Ta sẽ tiến hành search `processor` trên trình duyệt và mở trang `ark.intel.com` như hướng dẫn ở `CPU`.
  
  ![](https://i.imgur.com/ngljFRK.png)

- **B2:** Các bạn chú ý vào mục `Đồ họa Bộ xử lý --> Đồ họa bộ xử lý ‡`
  
  > Đây chính là `iGPU name` của bạn.
  > 
  > ![](https://i.imgur.com/Y724Y6p.png)ở đây igpu name là `HD4000`

### Chipset và Mainboard

Trước hết ta sẽ cần tìm hiểu chipset là gì? *Chipset máy tính là một* mạch tích hợp giúp xử lý giao tiếp giữa CPU, RAM, bộ lưu trữ và các thiết bị ngoại vi khác. Chipset xác định số lượng thành phần tốc độ cao hoặc thiết bị USB mà bo mạch chủ của bạn có thể hỗ trợ. Chipset thường bao gồm một đến bốn chip và các bộ điều khiển tính năng cho các thiết bị ngoại vi thường được sử dụng, như bàn phím, chuột hoặc màn hình.

Vậy còn mainboard là gì? Mainboard hay main máy tính hay bo mạch chủ là một bảng mạch đóng vai trò nền tảng trên máy tính, laptop có tác dụng kết nối các linh kiện bên trong thành thể thống nhất. Mainboard PC sẽ nằm ở thùng máy, hoặc tích hợp đằng sau màn hình đối với máy tính AIO.

Để xác định được mã của chúng ta sẽ làm như sau

#### Dùng system info

- **B1:** Chuột phải vào logo `Windows` ở góc dưới cùng bên trái và search `System Information`.

![](https://i.imgur.com/ifY4jbQ.png)

- **B2**: Ta chú ý vào dòng `Baseboard manufacturer` (đây là dòng hiện thị main) và `Baseboard product` (đây là dòng hiển thị chipset).
  
  ![](https://i.imgur.com/IMq9aiW.png)
  
  > Nhưng một số main sẽ không hiển thị chipset vậy ta sẽ tiến hành làm như sau

#### Thông qua device manager

- **B1:** mở `device manager`

- **B2:** chọn tới tab `IDE ATA/ATAPI controllers` 

- **B3:** Chọn `properties` ta sẽ có thể thấy thế hệ chipset
  
  ![299460458_838685037052875_6042626987910816592_n.png](https://raw.githubusercontent.com/king-dragon/image/main/2022/08/21-11-49-06-299460458_838685037052875_6042626987910816592_n.png)

### Audio Codec

- **B1:** Các bạn tải `aida64` [tại đây](https://www.aida64.com/downloads).

- **B2:** Các bạn sẽ vào tab `Multimedia --> PCI/PnP Audio` ở đây ta sẽ có thể thấy `audio codec`.
  
  ![](https://dortania.github.io/OpenCore-Install-Guide/assets/img/audio-controller-aida64.c4a94a0b.png)

### Network Controller models

- **B1:** Các bạn tải `aida64` [tại đây](https://www.aida64.com/downloads).

- **B2:** Các bạn sẽ chú ý đến mục sau `Network --> PCI/PnP Network`.
  
  ![](https://i.imgur.com/XiTPa8B.png)

### Drive Model

- **B1:** Chuột phải vào logo Windows ở góc cuối bên trái và chọn `device manager`.
  
  ![](https://i.imgur.com/oNBcTmN.png)

- **B2:** Bạn chọn vào disk ở đây ta sẽ có được tên ổ cứng.
  
  ![](https://i.imgur.com/vL2khbW.png)

### dGPU

- **B1:** Bạn nhấn tổ hợp phím `Windows + R`. 
  
  Và gõ `dxdiag` sau đó enter.
  
  ![](https://i.imgur.com/XHk4Jxy.png)

- **B2:** Hệ thống sẽ mở `DirectX Diagnostic Tool` và bạn hãy chuyển đến tab `render` chú ý đến dòng name.
  
  ![](https://i.imgur.com/zzNSJad.png)

### Keyboard, Trackpad and Touchscreen Connection Type

- **B1:** Các bạn tải aida64 [tại đây](https://www.aida64.com/downloads)

- **B2:** Các bạn truy cập vào đường dẫn `Devices --> Physical Devices --> PnP Devices` ở đây các bạn sẽ tiến hành tìm kiếm name Touchpad.
  
  ![](https://i.imgur.com/PgeqvQY.png)

### Xác định `location path`

Trước tiên ta cần tìm hiểu `location path` là gì? Nó là đường dẫn đến `devices` trong hệ thống và thường được hệ thống đọc dưới 2 dạng là `ACPI path` và `Device path`. `ACPI path` thường được sử dụng trong việc `patch DSDT` còn `Device path` thường được dùng trong `config.plist` để inject `properties` của các `Device`.

- **B1:** Các bạn nháy chuột phải vào biểu tượng `Windows` ở góc dưới bên trái và chọn `device manager`.
  
  ![](https://i.imgur.com/oNBcTmN.png)

- **B2:** Tiến hành chuột phải vào device cần lấy `location path` và chọn `properties`.
  
  ![](https://i.imgur.com/2bzgPTP.png)

- **B3:** Chọn tab `Details --> location paths`.
  
  ![](https://i.imgur.com/strrnkL.png)

- **B4:** Ta sẽ tiến hành chuyển value vừa lấy được ở trên về dạng path để có thể sử dụng.

```bash
//value mặc định
PCIROOT(0)#PCI(1C01)#PCI(0000)
ACPI(_SB_)#ACPI(PCI0)#ACPI(RP02)#ACPI(WLAN)

//Device path mặc định
PCIROOT(0)#PCI(1C01)#PCI(0000)

//ACPI path mặc định 
ACPI(_SB_)#ACPI(PCI0)#ACPI(RP02)#ACPI(WLAN)

//Convert Device path mặc định
PCIROOT(0)#PCI(1C01)#PCI(0000)
# Tiến hành chuyển dấu "#" thành dấu "/"
PCIROOT(0)/PCI(1C01)/PCI(0000)
# Ta tiến hành chia các giá trị nhỏ trong "()" thành các cặp 2 số. Nếu cặp số không bắt đầu bằng số "0" thì thêm số "0" vào trước
PCIROOT(00)/PCI(01C 01)/PCI(00 00)
# Viết thế chữ "x" vào giữa các cặp 2 chữ số
PCIROOT(0x0)/PCI(0x1C 0x1)/PCI(0x0 0x0)
# chuyển các dấu cách trong ngoặc thành dấu ","
PCIROOT(0x0)/PCI(0x1C,0x1)/PCI(0x0,0x0)

// Convert ACPI path nguyên mẫu
# Ta tiến hành giữ lại các ký tự trong ngoặc những ký tự khác thì lược bỏ 
_SB_ PCI0 RP02 WLAN
# Tiếp đó tiến hành thay dấu cách bằng dấu "."
_SB_.PCI0.RP02.WLAN
```

### Xác định vendor id và device id của usb controller

Khi tiến hành map usb các bạn cần xác định device id và vendor id để sử dụng đúng kext. Việc này rất dễ thực hiện ở mac nhưng khi không có mac thì các bạn làm theo sau:

- **B1:** chuột phải vào biểu tượng windows chọn `device manager`

- **B2:** chuột phải vào tên usb controller và chọn `Properties`

> tên usb controller thường bắt đầu bằng `Intel (R)`
> 
> ![](https://i.imgur.com/8l5Fdg8.png)

- **B3:** tới tab `Details` và chọn `Hardware ID` và nhìn vào dòng đầu tiên
  
  ![](https://i.imgur.com/pu11YG6.png)
  
  >  Ở đây ta có vendor id là `8086` device id là `1E31`



::: link {/img/link/dortania.png} [Source Tham Khảo](https://dortania.github.io/OpenCore-Install-Guide/macos-limits.html)
Hardware Limitations | OpenCore 
:::

::: link {/img/link/dortania.png} [Source Tham Khảo](https://dortania.github.io/OpenCore-Install-Guide/find-hardware.html#finding-hardware-using-windows)

Finding your hardware | OpenCore

:::
