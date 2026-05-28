// Product Database (Trilingual)
const products = [
  {
    id: "1.1",
    category: "bopp",
    image: "images/products.png",
    badge: { vi: "Đóng Gói", en: "Packaging", zh: "包装" },
    vi: {
      name: "Băng dính OPP",
      teaser: "Màng nền BOPP cán lớp keo Acrylic hệ nước, độ dính cao và dai.",
      structure: "Màng nền BOPP cán lớp keo Acrylic hệ nước.",
      colors: "Trong suốt, vàng đục, siêu trong.",
      specs: "Độ dày 40mic - 50mic. Bản rộng 48mm, 60mm. Dài 100Y, 200Y, cuộn máy 1000m.",
      apps: "Đóng thùng carton thông dụng trong logistics và sản xuất công nghiệp."
    },
    en: {
      name: "BOPP Packing Tape",
      teaser: "BOPP film coated with water-based acrylic adhesive, high tack and strength.",
      structure: "BOPP film coated with water-based acrylic adhesive.",
      colors: "Clear, Tan/Brown, Super Clear.",
      specs: "Thickness 40mic - 50mic. Widths 48mm, 60mm. Lengths 100Y, 200Y, or 1000m machine rolls.",
      apps: "Standard carton sealing in logistics and industrial manufacturing."
    },
    zh: {
      name: "BOPP 封箱胶带",
      teaser: "BOPP薄膜基材，涂布水性丙烯酸压敏胶，粘力强。",
      structure: "BOPP薄膜基材，涂布水性丙烯酸压敏胶（水性胶）。",
      colors: "透明、黄褐色、超透明。",
      specs: "厚度 40mic - 50mic。宽度 48mm、60mm。长度 100码、200码，或 1000米机用卷。",
      apps: "广泛用于物流与工业生产中的纸箱封箱包装。"
    }
  },
  {
    id: "1.2",
    category: "bopp",
    image: "images/products.png",
    badge: { vi: "Màu Sắc", en: "Colored", zh: "彩色" },
    vi: {
      name: "Băng dính Màu",
      teaser: "Màng BOPP nhuộm màu cơ bản phủ keo Acrylic, không phai màu khi kéo căng.",
      structure: "Màng BOPP nhuộm màu cơ bản phủ keo Acrylic. Dai nổi bật, không phai màu.",
      colors: "Đỏ, Xanh lá, Xanh dương, Vàng, Cam, Đen.",
      specs: "Độ dày 45mic - 50mic. Quy cách theo yêu cầu.",
      apps: "Đóng gói kết hợp phân loại hàng hóa, đánh dấu hàng lỗi hoặc khu vực kho đặc biệt."
    },
    en: {
      name: "BOPP Color Tape",
      teaser: "Dyed BOPP film with acrylic adhesive, fade-resistant when stretched.",
      structure: "Dyed BOPP film coated with acrylic adhesive. Fade-resistant and stretch-durable.",
      colors: "Red, Green, Blue, Yellow, Orange, Black.",
      specs: "Thickness 45mic - 50mic. Custom widths/lengths on request.",
      apps: "Color-coded packaging, marking defective items, or identifying special inventory areas."
    },
    zh: {
      name: "彩色封箱胶带",
      teaser: "染色BOPP薄膜基材，涂布丙烯酸胶水。拉伸时不易褪色。",
      structure: "染色BOPP薄膜基材，涂布丙烯酸胶水。拉伸时不易褪色。",
      colors: "红色、绿色、蓝色、黄色、橙色、黑色。",
      specs: "厚度 45mic - 50mic。规格可根据客户要求定制。",
      apps: "用于货物包装分类、不良品标记或仓库特定区域标识。"
    }
  },
  {
    id: "1.3",
    category: "bopp",
    image: "images/products.png",
    badge: { vi: "Cảnh Báo", en: "Warning", zh: "警示" },
    vi: {
      name: "Băng dính In \"Hàng Dễ Vỡ\"",
      teaser: "Màng BOPP in sẵn chữ HÀNG DỄ VỠ - VUI LÒNG NHẸ TAY nổi bật.",
      structure: "Màng BOPP in sẵn dòng chữ cảnh báo tiếng Việt/Anh, phủ nền vàng nổi bật.",
      colors: "Vàng chữ đen đỏ.",
      specs: "Độ dày 50mic. Bản rộng 48mm. Dài 100Y.",
      apps: "Đóng gói hàng thủy tinh, điện tử, đồ gốm sứ chuyển phát nhanh thương mại điện tử."
    },
    en: {
      name: "Fragile Warning Tape",
      teaser: "BOPP film printed with 'FRAGILE - VUI LÒNG NHẸ TAY' warning text.",
      structure: "BOPP film printed with 'HÀNG DỄ VỠ - FRAGILE' warning text on a high-visibility yellow background.",
      colors: "Yellow background with black/red text.",
      specs: "Thickness 50mic. Width 48mm. Length 100Y.",
      apps: "Sealing fragile courier packages like glassware, electronics, and ceramics."
    },
    zh: {
      name: "易碎品警示胶带",
      teaser: "印有中英文 \"HÀNG DỄ VỠ - FRAGILE\" 警示语的BOPP胶带。",
      structure: "印有中英文 \"HÀNG DỄ VỠ - FRAGILE\" 警示语的BOPP胶带，鲜艳黄色背景。",
      colors: "黄底红黑字。",
      specs: "厚度 50mic。宽度 48mm。长度 100码。",
      apps: "包装玻璃器皿、电子零件、陶瓷等易碎电商快递件。"
    }
  },
  {
    id: "1.4",
    category: "bopp",
    image: "images/products.png",
    badge: { vi: "Thương Hiệu", en: "Branded", zh: "定制" },
    vi: {
      name: "Băng dính In Logo",
      teaser: "In trực tiếp logo, tên công ty lên màng BOPP, chống khui mở tráo hàng.",
      structure: "Thiết kế trục in đồng để in trực tiếp logo, tên thương hiệu lên màng BOPP trước khi phủ keo.",
      colors: "Theo thiết kế thương hiệu (1-3 màu).",
      specs: "Theo yêu cầu thiết kế của doanh nghiệp.",
      apps: "Đóng gói chuyên nghiệp, nhận diện và quảng bá thương hiệu cho các nhà máy lớn."
    },
    en: {
      name: "BOPP Printed Tape",
      teaser: "Custom company logos printed on BOPP film, provides tamper-evidence.",
      structure: "BOPP film printed with custom company logos and brand details using copper plates prior to adhesive coating.",
      colors: "Custom brand color match (1-3 colors).",
      specs: "Tailored to corporate requirements.",
      apps: "Professional packaging, brand recognition, and secure sealing for manufacturers."
    },
    zh: {
      name: "印字/定制Logo胶带",
      teaser: "使用铜版印刷技术将商标印于BOPP膜上，具备防伪防拆功能。",
      structure: "使用铜版印刷技术将公司商标、名称直接印刷于BOPP膜上，随后涂覆胶水。具备防伪防拆功能。",
      colors: "按品牌设计定制（1-3色）。",
      specs: "根据客户要求定制规格。",
      apps: "工业纸箱封箱、企业品牌推广和防盗安全包装。"
    }
  },
  {
    id: "1.5",
    category: "bopp",
    image: "images/products.png",
    badge: { vi: "Văn Phòng", en: "Stationery", zh: "文具" },
    vi: {
      name: "Băng dính Văn Phòng",
      teaser: "Màng BOPP siêu mỏng trong suốt phủ keo cực dính, lõi nhỏ phi 25mm.",
      structure: "Màng BOPP siêu mỏng trong suốt phủ keo cực dính, đóng cuộn nhỏ lõi nhựa.",
      colors: "Trong suốt.",
      specs: "Bản rộng 12mm, 18mm, 24mm. Lõi nhựa phi 25mm.",
      apps: "Dán giấy tờ văn phòng, đóng gói hộp quà, dán thủ công học sinh."
    },
    en: {
      name: "Stationery Tape",
      teaser: "Ultra-thin transparent BOPP film with high-tack adhesive, small 25mm core.",
      structure: "Ultra-thin transparent BOPP film with high-tack adhesive, wound on a small plastic core.",
      colors: "Transparent.",
      specs: "Widths 12mm, 18mm, 24mm. Plastic core diameter 25mm.",
      apps: "Office document mending, gift wrapping, and school craft projects."
    },
    zh: {
      name: "小规格文具胶带",
      teaser: "超薄透明BOPP薄膜，高粘度胶水，绕制在25mm内径的小塑料管芯上。",
      structure: "超薄透明BOPP薄膜，高粘度胶水，绕制在25mm内径的小塑料管芯上。",
      colors: "透明。",
      specs: "宽度 12mm、18mm、24mm。内径 25mm 塑料管芯。",
      apps: "办公室文件粘接、礼品包装、学生手工制作。"
    }
  },
  {
    id: "1.6",
    category: "industrial",
    image: "images/products.png",
    badge: { vi: "Công Nghiệp", en: "Industrial", zh: "工业" },
    vi: {
      name: "Băng dính Dán Nền",
      teaser: "Màng PVC dẻo dai chịu mài mòn cao (xe nâng đi qua không bong), chống ẩm tốt.",
      structure: "Màng nhựa PVC dẻo dai phủ keo cao su dính cực chắc. Chịu mài mòn, ẩm và axit nhẹ.",
      colors: "Sọc vàng-đen, sọc đỏ-trắng, Vàng, Xanh, Đỏ.",
      specs: "Độ dày 150mic. Bản rộng 48mm. Dài 33m.",
      apps: "Phân làn kho xưởng, đánh dấu ranh giới nguy hiểm, chỉ dẫn lối thoát hiểm."
    },
    en: {
      name: "Floor Marking Tape",
      teaser: "Flexible PVC film, highly wear-resistant (withstands forklift traffic).",
      structure: "Flexible, heavy-duty PVC film coated with strong rubber-based adhesive. Highly wear-resistant, moisture-proof, and chemical-resistant.",
      colors: "Yellow/Black stripes, Red/White stripes, Solid Yellow, Blue, Red.",
      specs: "Thickness 150mic. Width 48mm. Length 33m.",
      apps: "Factory floor zoning, warehouse aisle marking, hazardous area warning, and safety path indication."
    },
    zh: {
      name: "PVC 地板划线胶带",
      teaser: "韧性PVC薄膜，耐磨损（叉车驶过不易剥离），防潮耐弱酸。",
      structure: "韧性PVC薄膜，涂布高粘性橡胶型压敏胶。耐磨损（叉车驶过不易剥离），防潮，耐弱酸。",
      colors: "黄黑双色、红白双色、纯黄、纯蓝、纯红。",
      specs: "厚度 150mic。宽度 48mm。长度 33米。",
      apps: "仓库划线定位、厂区通道警示、危险区域标记与应急出口指示。"
    }
  },
  {
    id: "1.7",
    category: "industrial",
    image: "images/products.png",
    badge: { vi: "ESD Cảnh Báo", en: "ESD Safe", zh: "防静电" },
    vi: {
      name: "Băng dính Dán Nền ESD",
      teaser: "Màng PVC chống tĩnh điện, in ký hiệu ESD, điện trở 10^6 - 10^9 Ohms.",
      structure: "Màng PVC phủ lớp hóa chất chống tĩnh điện, bề mặt in biểu tượng ESD.",
      colors: "Vàng đen kèm logo tĩnh điện.",
      specs: "Điện trở bề mặt 10^6 - 10^9 Ohms. Bản rộng 48mm. Dài 33m.",
      apps: "Phân làn cảnh báo khu an toàn tĩnh điện trong nhà máy lắp ráp bản mạch điện tử."
    },
    en: {
      name: "ESD Floor Marking Tape",
      teaser: "Antistatic PVC floor tape with ESD warnings, surface resistance 10^6-10^9 Ohms.",
      structure: "PVC film with antistatic coating, printed with ESD warning icons.",
      colors: "Yellow/Black with ESD logo.",
      specs: "Surface resistance 10^6 - 10^9 Ohms. Width 48mm. Length 33m.",
      apps: "Marking boundaries and warning zones within ESD-safe areas in electronics assembly plants."
    },
    zh: {
      name: "防静电地板划线胶带",
      teaser: "表面防静电处理PVC膜，表面电阻 10^6 - 10^9 欧姆。",
      structure: "表面经过防静电处理的PVC薄膜，印有防静电警示标志。表面电阻：10^6 - 10^9 欧姆。",
      colors: "黄黑色带防静电标识。",
      specs: "表面电阻 10^6 - 10^9 欧姆。宽度 48mm。长度 33米。",
      apps: "电子厂、半导体车间等静电敏感区域 we 隔离与警示划线。"
    }
  },
  {
    id: "1.8",
    category: "industrial",
    image: "images/products.png",
    badge: { vi: "Chống Trượt", en: "Anti-slip", zh: "防滑" },
    vi: {
      name: "Băng dính Chống Trượt",
      teaser: "Lớp màng nền phủ cát thạch anh/silica cực nhám, keo Acrylic cường lực.",
      structure: "Lớp màng nền phủ cát thạch anh/silica nhám hạt lớn cực kỳ sắc nhọn, mặt sau phủ keo Acrylic cường lực.",
      colors: "Đen, Vàng-Đen phản quang, Trong suốt.",
      specs: "Bản rộng 50mm. Dài 5m, 18m.",
      apps: "Dán bậc cầu thang, dốc trơn trượt, khu vực ẩm ướt, sàn tàu để tăng ma sát, chống trượt ngã."
    },
    en: {
      name: "Anti-slip Tape",
      teaser: "Coated with highly abrasive quartz/silica sand grit, acrylic adhesive.",
      structure: "Tough carrier film coated with highly abrasive quartz/silica sand grit, back-coated with high-strength Acrylic adhesive.",
      colors: "Black, Yellow/Black, Transparent.",
      specs: "Width 50mm. Lengths 5m, 18m.",
      apps: "Applied to stairs, ramps, slippery walkways, and marine decks to increase traction and prevent falls."
    },
    zh: {
      name: "砂面防滑胶带",
      teaser: "基材表面覆盖坚硬耐磨的石英砂颗粒，反面涂强力丙烯酸胶水。",
      structure: "基材表面覆盖坚硬耐磨的石英砂/氧化铝颗粒，反面涂布强力丙烯酸胶水。",
      colors: "黑色、黄黑相间、透明。",
      specs: "宽度 50mm。长度 5米、18米。",
      apps: "贴于楼梯台阶、斜坡、潮湿易滑地面、船舶甲板等, 起防滑防跌作用。"
    }
  },
  {
    id: "1.9",
    category: "industrial",
    image: "images/products.png",
    badge: { vi: "Phản Quang", en: "Reflective", zh: "反光" },
    vi: {
      name: "Băng dính Phản Quang",
      teaser: "Màng vi lăng kính phản quang chất lượng cao, bám dính kim loại cực tốt.",
      structure: "Màng vi lăng kính phản quang (Retroreflective) chất lượng cao, phủ keo bám dính kim loại cực mạnh.",
      colors: "Sọc Đỏ-Trắng, Vàng-Đen, Vàng phản quang.",
      specs: "Bản rộng 50mm. Dài 45m.",
      apps: "Dán cảnh báo trên cabin xe tải, rào chắn công trình, cột tiêu giao thông."
    },
    en: {
      name: "Reflective Tape",
      teaser: "High-quality microprismatic retroreflective film, aggressive metal bond.",
      structure: "High-quality microprismatic retroreflective film coated with aggressive metal-bonding adhesive.",
      colors: "Red/White stripes, Yellow/Black stripes, Solid Yellow.",
      specs: "Width 50mm. Length 45m.",
      apps: "Visibility warning on truck cabins, construction barriers, and road safety markers."
    },
    zh: {
      name: "微棱镜反光警示胶带",
      teaser: "高亮微棱镜反光膜基材，背涂强粘型金属面丙烯酸胶水。",
      structure: "高亮微棱镜反光膜基材，背涂强粘型金属面丙烯酸胶水。",
      colors: "红白相间、黄黑相间、荧光黄。",
      specs: "宽度 50mm。长度 45米。",
      apps: "粘贴于货车车身、建筑围挡、交通路标及隔离墩，夜间反射灯光提供警示。"
    }
  },
  {
    id: "1.10",
    category: "industrial",
    image: "images/products.png",
    badge: { vi: "Điện Lực", en: "Electrical", zh: "绝缘" },
    vi: {
      name: "Băng dính Cách điện PVC",
      teaser: "Màng PVC kháng cháy chịu áp đến 600V, tự dập tắt lửa (tiêu chuẩn UL 510).",
      structure: "Màng PVC dẻo kháng cháy chịu điện áp cao kết hợp keo cao su dính đặc biệt.",
      colors: "Đen, Đỏ, Vàng, Xanh lá, Xanh dương, Trắng.",
      specs: "Độ dày 130mic. Bản rộng 18mm. Dài 10Y, 20Y (Thương hiệu Nano/BaDiVi).",
      apps: "Bọc cách điện mối nối cáp điện trong công trình dân dụng và công nghiệp."
    },
    en: {
      name: "PVC Electrical Tape",
      teaser: "Flame-retardant PVC tape, rated up to 600V, UL 510 compliant.",
      structure: "Flexible, flame-retardant PVC film paired with premium rubber-based adhesive. Rated up to 600V, self-extinguishing (UL 510 compliant).",
      colors: "Black, Red, Yellow, Green, Blue, White.",
      specs: "Thickness 130mic. Width 18mm. Lengths 10Y, 20Y.",
      apps: "Insulating electrical wire splices in commercial, residential, and industrial applications."
    },
    zh: {
      name: "PVC 电工绝缘胶带",
      teaser: "具有优良阻燃和耐高压性能的软质PVC膜, 符合 UL 510 标准。",
      structure: "具有优良阻燃 and 耐高压性能的软质PVC膜，配以特制橡胶型胶水。耐电压达600V，自熄阻燃（符合UL 510标准）。",
      colors: "黑色、红色、黄色、绿色、蓝色、白色。",
      specs: "厚度 130mic。宽度 18mm。长度 10码、20码。",
      apps: "民用及工业电线电缆接头的绝缘缠绕与包扎。"
    }
  },
  {
    id: "1.11",
    category: "specialty",
    image: "images/products.png",
    badge: { vi: "2 Mặt", en: "Double Sided", zh: "双面" },
    vi: {
      name: "Băng dính 2 Mặt",
      teaser: "Lớp màng giấy Tissue hoặc PET siêu mỏng tráng keo Acrylic dính hai mặt.",
      structure: "Lớp màng nền giấy lụa mỏng (Tissue paper) hoặc màng PET siêu mỏng tráng keo Acrylic dính cả 2 mặt.",
      colors: "Trắng sữa (Tissue), Trong suốt (PET). Lớp bảo vệ giấy trắng/vàng.",
      specs: "Bản rộng 12mm, 24mm, 48mm. Dài theo yêu cầu.",
      apps: "Liên kết các chi tiết giấy, bao bì, lắp ráp linh kiện mỏng kín kẽ có tính thẩm mỹ cao."
    },
    en: {
      name: "Double-sided Tape",
      teaser: "Thin tissue paper or PET carrier coated on both sides with acrylic adhesive.",
      structure: "Thin tissue paper or PET carrier coated on both sides with acrylic adhesive, protected by a siliconized liner.",
      colors: "White translucent (Tissue), Transparent (PET). White/yellow release liner.",
      specs: "Widths 12mm, 24mm, 48mm. Custom lengths.",
      apps: "Paper bonding, premium box making, and low-profile bonding of thin electronic components."
    },
    zh: {
      name: "薄款双面胶带",
      teaser: "极薄棉纸或透明PET基材，双面均匀涂布丙烯酸胶水，覆硅油离型纸。",
      structure: "极薄的棉纸（Tissue）或透明PET为基材，双面均匀涂布丙烯酸胶水，外覆硅油离型纸保护。",
      colors: "白色半透明（棉纸基材）、超清透明（PET基材）。黄/白离型纸。",
      specs: "宽度 12mm、24mm、48mm。长度可按需切割。",
      apps: "纸张接合、高档包装、超薄电子零配件的隐形高美观粘接。"
    }
  },
  {
    id: "1.12",
    category: "specialty",
    image: "images/products.png",
    badge: { vi: "2 Mặt Xốp", en: "Double Foam", zh: "泡棉双面" },
    vi: {
      name: "Băng dính Xốp 2 Mặt",
      teaser: "Xốp EVA/PE dày 1mm-2mm phủ keo cực mạnh, chịu chấn động tốt.",
      structure: "Lớp xốp EVA hoặc xốp PE dày 1mm - 2mm phủ keo Acrylic cực mạnh hai mặt. Chịu chấn động tốt.",
      colors: "Xốp đen keo xanh/đỏ, xốp trắng keo vàng.",
      specs: "Độ dày xốp 1mm - 2mm. Bản rộng 24mm. Dài 5m, 10m.",
      apps: "Treo tranh ảnh, gắn biển hiệu, dán nẹp cửa kính, trang trí nội thất."
    },
    en: {
      name: "Double-sided Foam Tape",
      teaser: "1mm-2mm EVA or PE foam carrier with high-strength Acrylic adhesive.",
      structure: "1mm - 2mm thick EVA or PE foam carrier coated on both sides with high-strength Acrylic adhesive. Absorbs shocks and fills uneven gaps.",
      colors: "Black foam with blue/red liner, white foam with yellow liner.",
      specs: "Foam thickness 1mm - 2mm. Width 24mm. Lengths 5m, 10m.",
      apps: "Mounting wall frames, securing signage, fixing window trim, and interior decoration."
    },
    zh: {
      name: "泡棉双面胶带",
      teaser: "1mm-2mm厚度EVA或PE发泡泡棉基材, 双面涂布强粘丙烯酸胶。",
      structure: "1mm - 2mm 厚度的EVA或PE发泡泡棉基材，双面涂布强粘丙烯酸胶。减震抗冲击，能填补粗糙表面缝隙。",
      colors: "黑泡棉带红/蓝膜，白泡棉带黄纸。",
      specs: "泡棉厚度 1mm - 2mm。宽度 24mm。长度 5米、10米。",
      apps: "挂装装饰画、广告标牌固定、门窗密封条粘贴及汽车内饰装潢。"
    }
  },
  {
    id: "1.13",
    category: "specialty",
    image: "images/products.png",
    badge: { vi: "Giấy Nhăn", en: "Masking", zh: "美纹纸" },
    vi: {
      name: "Băng dính Giấy",
      teaser: "Giấy crepe dai mịn phủ keo cao su tự nhiên, xé tay dễ, không để lại keo bẩn.",
      structure: "Giấy crepe (giấy nhăn) dai mịn phủ keo cao su tự nhiên. Xé bằng tay dễ dàng, bóc không để lại vết keo.",
      colors: "Trắng sữa, vàng nhạt.",
      specs: "Bản rộng 15mm, 20mm, 24mm, 48mm. Dài 20m.",
      apps: "Che chắn bảo vệ bề mặt khi phun sơn ô tô/nội thất, dán nhãn ghi chú tạm thời."
    },
    en: {
      name: "Masking Tape",
      teaser: "Crepe paper coated with natural rubber, easy hand-tearable, residue-free.",
      structure: "Crepe paper backing coated with natural rubber adhesive. Hand-tearable, peels cleanly without leaving adhesive residue even after baking.",
      colors: "Off-white, light yellow.",
      specs: "Widths 15mm, 20mm, 24mm, 48mm. Length 20m.",
      apps: "Paint masking in automotive and furniture coating, wave soldering protection, and temporary labeling."
    },
    zh: {
      name: "美纹纸胶带",
      teaser: "皱纹纸基材，涂布天然橡胶胶水。易手撕，烘烤剥离无残胶。",
      structure: "皱纹纸（Crepe paper）基材，涂布天然橡胶型胶水。易手撕, 烤漆高温烘烤后剥离无残胶（Residue-free）。",
      colors: "乳白色、淡黄色。",
      specs: "宽度 15mm、20mm、24mm、48mm。长度 20米。",
      apps: "汽车或家具喷漆烤漆遮蔽保护、电路板波峰焊遮蔽、临时分类标识标签。"
    }
  },
  {
    id: "1.14",
    category: "specialty",
    image: "images/products.png",
    badge: { vi: "Da Bò", en: "Kraft Paper", zh: "牛皮纸" },
    vi: {
      name: "Băng dính Giấy Da Bò",
      teaser: "Giấy Kraft tự nhiên thân thiện môi trường, tự dính hoặc hoạt hóa bằng nước.",
      structure: "Màng nền giấy Kraft tự nhiên thân thiện môi trường, phủ keo tự dính hoặc keo hoạt hóa bằng nước.",
      colors: "Nâu vàng da bò.",
      specs: "Bản rộng 48mm, 60mm. Dài 50m.",
      apps: "Đóng gói thùng hàng cao cấp, dán dính khung tranh gỗ nghệ thuật, giải pháp bao bì xanh."
    },
    en: {
      name: "Kraft Paper Tape",
      teaser: "Eco-friendly natural Kraft paper, available in self-adhesive or water-activated.",
      structure: "Eco-friendly natural Kraft paper backing, available in self-adhesive or water-activated styles.",
      colors: "Kraft brown.",
      specs: "Widths 48mm, 60mm. Length 50m.",
      apps: "Premium carton packing, picture frame backing, and sustainable packaging solutions."
    },
    zh: {
      name: "牛皮纸胶带",
      teaser: "环保天然牛皮纸基材，分为自粘型和湿水活化型。",
      structure: "环保天然牛皮纸基材，分为自粘型和湿水活化型（Water-activated，湿水才起粘性）。",
      colors: "牛皮黄褐色。",
      specs: "宽度 48mm、60mm。长度 50米。",
      apps: "高档出口纸箱封装、木质画框背封、环保绿色包装应用。"
    }
  },
  {
    id: "1.15",
    category: "specialty",
    image: "images/products.png",
    badge: { vi: "Vải Dệt", en: "Cloth", zh: "布基" },
    vi: {
      name: "Băng dính Vải",
      teaser: "Vải cotton phủ PE chống nước ngoài và keo cao su cực dính trong.",
      structure: "Vải dệt sợi cotton phủ lớp nhựa PE chống nước bên ngoài và keo cao su dày siêu dính bên trong. Chịu lực xé cực lớn.",
      colors: "Xám bạc, Đỏ, Vàng, Xanh dương, Đen.",
      specs: "Độ dày 250mic - 300mic. Bản rộng 48mm. Dài 10m, 15m.",
      apps: "Vá bạt, đóng gói các thùng hàng siêu nặng xuất khẩu, quấn bảo vệ ống dẫn."
    },
    en: {
      name: "Cloth Tape",
      teaser: "Waterproof PE coated cotton fabric with thick, aggressive rubber adhesive.",
      structure: "Polyethylene-coated cotton cloth backing with thick, aggressive rubber adhesive. Extremely high tensile strength, weather-proof.",
      colors: "Silver grey, Red, Yellow, Blue, Black.",
      specs: "Thickness 250mic - 300mic. Width 48mm. Lengths 10m, 15m.",
      apps: "Heavy-duty bundling, tarp repair, heavy export wooden case sealing, and pipe wrapping."
    },
    zh: {
      name: "重型布基胶带",
      teaser: "聚乙烯覆膜的棉织布基材，内涂厚层强粘性橡胶胶水。抗拉力强。",
      structure: "聚乙烯（PE）覆膜 of 棉织布基材，内涂厚层强粘性橡胶胶水。抗拉强度极高，耐磨，耐候防水性好。",
      colors: "银灰色、红色、黄色、蓝色、黑色。",
      specs: "厚度 250mic - 300mic。宽度 48mm。长度 10米、15米。",
      apps: "篷布修补、重型外贸木箱封箱、管道外部防腐缠绕防护。"
    }
  },
  {
    id: "1.16",
    category: "specialty",
    image: "images/products.png",
    badge: { vi: "Simili", en: "PVC Easy Tear", zh: "PVC易撕" },
    vi: {
      name: "Băng dính Dán Gáy Simili",
      teaser: "Màng PVC có gân ngang dễ xé thẳng bằng tay, phủ keo acrylic hệ nước.",
      structure: "Màng PVC dẻo có các gân kẻ sọc ngang hỗ trợ xé rách thẳng tắp bằng tay dễ dàng (Easy Tear), phủ keo dính hệ nước cực bền màu.",
      colors: "Xanh dương, Đỏ, Vàng, Xanh lá, Trắng.",
      specs: "Bản rộng 36mm, 48mm. Dài 8m, 12m.",
      apps: "Quấn dán gáy sách văn phòng, đóng tập hồ sơ tài liệu học sinh, đóng gói nhanh linh kiện."
    },
    en: {
      name: "PVC Easy Tear Tape",
      teaser: "Flexible PVC with micro-embossed lines for straight, easy hand-tearing.",
      structure: "Flexible PVC film with micro-embossed horizontal lines for straight, easy hand-tearing, coated with water-based acrylic adhesive.",
      colors: "Blue, Red, Yellow, Green, White.",
      specs: "Widths 36mm, 48mm. Lengths 8m, 12m.",
      apps: "Office bookbinding, document edging, spine reinforcement, and quick component packing."
    },
    zh: {
      name: "PVC 易撕书脊胶带",
      teaser: "软质PVC薄膜，带横向压痕设计支持微力手撕直边，装订书脊。",
      structure: "软质聚氯乙烯（PVC）薄膜，带横向压痕设计支持微力手撕直边（Easy Tear），涂有水性丙烯酸压敏胶。",
      colors: "蓝色、红色、黄色、绿色、白色。",
      specs: "宽度 36mm、48mm。长度 8米、12米。",
      apps: "办公文本书脊装订、试卷挡盖封边、小电子配件快速缠绕包扎。"
    }
  },
  {
    id: "2.1",
    category: "films",
    image: "images/products.png",
    badge: { vi: "Màng Quấn", en: "Stretch Film", zh: "缠绕膜" },
    vi: {
      name: "Màng Quấn Căng PE",
      teaser: "Hạt nhựa LLDPE nguyên sinh, độ giãn dài >= 300%, chống va đập ẩm mốc.",
      structure: "Hạt nhựa LLDPE nguyên sinh thổi đùn kết hợp phụ gia tăng độ giãn và tự dính. Độ giãn dài >= 300%.",
      colors: "Trong suốt, Xanh dương, Đen.",
      specs: "Độ dày 17mic - 20mic. Khối lượng cuộn 2kg, 3.8kg, 5kg, 15kg (cuộn máy).",
      apps: "Quấn cố định pallet hàng hóa chống va đập, trầy xước và ẩm mốc khi lưu bãi cảng biển."
    },
    en: {
      name: "PE Stretch Film",
      teaser: "100% virgin LLDPE resins, elastic elongation >= 300%, cargo stabilization.",
      structure: "Extruded from 100% virgin LLDPE resins blended with tackifiers. Elastic elongation >= 300%.",
      colors: "Clear, Blue, Black.",
      specs: "Thickness 17mic - 20mic. Roll weights: 2kg, 3.8kg, 5kg, 15kg (machine roll).",
      apps: "Pallet wrapping, secure industrial cargo transport, protection against dirt and salty sea breeze."
    },
    zh: {
      name: "LLDPE 缠绕膜",
      teaser: "采用 100% 全新 LLDPE 粒子，拉伸率 >= 300%，货物托盘固定。",
      structure: "采用100%全新LLDPE（线性低密度聚乙烯）粒子共挤吹塑而成，添加增粘剂。拉伸率 >= 300%。",
      colors: "透明、蓝色、黑色。",
      specs: "厚度 17mic - 20mic。重量 2kg、3.8kg、5kg、15kg（机用）。",
      apps: "货物托盘缠绕固定，防尘防潮，防海盐腐蚀，保障物流运输安全。"
    }
  },
  {
    id: "2.2",
    category: "films",
    image: "images/products.png",
    badge: { vi: "Co Nhiệt", en: "Shrink Film", zh: "收缩膜" },
    vi: {
      name: "Màng Co Nhiệt POF",
      teaser: "Đồng đùn đa lớp PP và PE siêu trong suốt, an toàn thực phẩm (chuẩn FDA).",
      structure: "Đồng đùn đa lớp PP và PE siêu trong suốt (truyền sáng >= 90%), mỏng dai, an toàn thực phẩm (chuẩn FDA).",
      colors: "Siêu trong suốt.",
      specs: "Độ dày 15mic, 19mic. Dạng cuộn gập đôi (Center-folded) hoặc cuộn đơn.",
      apps: "Bọc co nhiệt bảo vệ mỹ phẩm, hộp thực phẩm, tập sách, linh kiện điện tử cao cấp."
    },
    en: {
      name: "POF Shrink Film",
      teaser: "Co-extruded multi-layer PP/PE, ultra-transparent, FDA food-contact safe.",
      structure: "Co-extruded multi-layer PP/PE film, ultra-transparent (light transmission >= 90%), puncture-resistant, FDA food-contact safe.",
      colors: "Ultra-transparent.",
      specs: "Thickness 15mic, 19mic. Center-folded or single wind rolls.",
      apps: "Heat-shrink packaging for cosmetics, food boxes, books, and high-end consumer goods."
    },
    zh: {
      name: "POF 环保热收缩膜",
      teaser: "PP与PE粒子多层共挤而成超透明膜, 无毒环保，符合 FDA 标准。",
      structure: "PP与PE粒子五层/三层共挤而成的超透明收缩膜，光泽度好，无毒环保（符合美国FDA食品级安全标准）。",
      colors: "超透明。",
      specs: "厚度 15mic、19mic。双折卷（Center-folded）或单层卷。",
      apps: "瓶装化妆品、高档食品盒、精装图书、高精电子产品的塑封热收缩包装。"
    }
  },
  {
    id: "2.3",
    category: "films",
    image: "images/products.png",
    badge: { vi: "Co PVC", en: "PVC Shrink", zh: "PVC收缩" },
    vi: {
      name: "Màng Co Nhiệt PVC",
      teaser: "Co rút mạnh ở nhiệt độ thấp, bóng bẩy cứng cáp, giải pháp tối ưu chi phí.",
      structure: "Chất liệu PVC kết hợp phụ gia hóa dẻo. Co rút mạnh ở nhiệt độ thấp (100°C - 130°C), cứng giòn bóng bẩy.",
      colors: "Trong suốt ánh xanh.",
      specs: "Độ dày 30mic - 40mic. Quy cách cuộn hoặc cắt sẵn thành túi.",
      apps: "Làm tem nhãn co thân chai, bọc lock sữa, pin điện thoại, bao bì giá rẻ."
    },
    en: {
      name: "PVC Shrink Film",
      teaser: "High shrinkage at low temperatures, stiff gloss finish, cost-effective.",
      structure: "PVC resin with plasticizers. High shrinkage at low temperatures (100°C - 130°C), stiff gloss finish, economical.",
      colors: "Transparent with light blue tint.",
      specs: "Thickness 30mic - 40mic. Available in rolls or pre-cut bags.",
      apps: "Bottle labels, multipacks (e.g., canned drinks), battery wrappers, and cheap retail sealing."
    },
    zh: {
      name: "PVC 热收缩膜",
      teaser: "低温下快速收缩，硬度高，外观光亮, 经济型。",
      structure: "聚氯乙烯（PVC）材料添加增塑剂。在较低温度下（100°C - 130°C）即可快速收缩，硬度高，外观光亮。",
      colors: "透明带微蓝光泽。",
      specs: "厚度 30mic - 40mic。提供整卷或切袋规格。",
      apps: "瓶身套标、促销联包（如牛奶箱）、干电池外套及五金小商品的塑封。"
    }
  },
  {
    id: "2.4",
    category: "films",
    image: "images/products.png",
    badge: { vi: "Bảo Vệ", en: "Protective", zh: "保护膜" },
    vi: {
      name: "Màng Bảo Vệ Bề Mặt PE",
      teaser: "PE nguyên sinh tráng keo Acrylic lực dính cực nhẹ, bóc không để lại vết keo.",
      structure: "Màng nền PE nguyên sinh tráng keo Acrylic lực dính cực nhẹ (Low-tack: 0.05 - 0.2 N/25mm). Bóc không để lại vết keo nhầy.",
      colors: "Xanh dương, Trắng trong, Trắng đen.",
      specs: "Độ dày 45mic - 70mic. Bản rộng tối đa 1250mm. Dài 200m - 500m.",
      apps: "Dán bảo vệ bề mặt nhôm kính, tấm inox, nhựa, gỗ cao cấp tránh trầy xước trong chế tạo và vận chuyển."
    },
    en: {
      name: "PE Protective Film",
      teaser: "PE film coated with low-tack Acrylic adhesive, peels off residue-free.",
      structure: "Co-extruded PE film coated with very low-tack Acrylic adhesive (0.05 - 0.2 N/25mm). Guaranteed to peel off residue-free.",
      colors: "Blue, Clear, Black & White.",
      specs: "Thickness 45mic - 70mic. Max width 1250mm. Lengths 200m - 500m.",
      apps: "Temporary surface protection for aluminum profiles, stainless steel sheets, glass panels, and plastics during fabrication and shipping."
    },
    zh: {
      name: "PE 表面防刮保护膜",
      teaser: "聚乙烯基膜，涂覆极低粘度丙烯酸胶水，撕下时保证无残胶。",
      structure: "聚乙烯（PE）基膜，涂覆极低粘度丙烯酸胶水（粘着力：0.05 - 0.2 N/25mm）。撕下时保证无残胶（Residue-free）。",
      colors: "蓝色、透明色、黑白双面。",
      specs: "厚度 45mic - 70mic。最大宽度 1250mm。长度 200米 - 500米。",
      apps: "用于铝板、不锈钢板、玻璃幕墙、塑料制品及高档木饰表面的防划伤、防尘保护。"
    }
  },
  {
    id: "2.5",
    category: "films",
    image: "images/products.png",
    badge: { vi: "Xốp Nổ", en: "Bubble Wrap", zh: "气泡膜" },
    vi: {
      name: "Xốp Nổ Bong Bóng Khí",
      teaser: "Hạt nhựa LDPE tạo hình bóng khí tròn căng, chịu tải nén bảo vệ chống va đập.",
      structure: "Hạt nhựa LDPE được tạo hình bóng khí tròn căng, định lượng chuẩn công nghiệp 30g/m^2 - 50g/m^2. Chịu tải nén tốt.",
      colors: "Trong suốt.",
      specs: "Bản rộng từ 20cm đến 1.5m. Chiều dài cuộn 100m.",
      apps: "Đóng bọc hàng dễ vỡ, chống sốc chuyển phát nhanh, đóng gói thương mại điện tử."
    },
    en: {
      name: "Bubble Wrap",
      teaser: "LDPE bubble cushioning wrap, industrial density 30g/m^2-50g/m^2, shock absorbing.",
      structure: "Extruded LDPE shaped with regular gas-filled cushioning bubbles. Standard industrial density ranges from 30g/m^2 to 50g/m^2.",
      colors: "Transparent.",
      specs: "Roll widths: 20cm to 1.5m. Roll length: 100m.",
      apps: "Shock-absorbing wrap for delicate products, cushioning in parcels, and general fragile shipping."
    },
    zh: {
      name: "减震气泡防潮膜",
      teaser: "低密度聚乙烯经吹塑成型，表面密布气泡, 减震抗摔。",
      structure: "低密度聚乙烯（LDPE）经吹塑成型，表面密布充气球状气泡。标准工业克重为 30g/m^2 - 50g/m^2。",
      colors: "透明。",
      specs: "卷宽 20cm - 1.5米。卷长 100米。",
      apps: "精密仪器的裹包、防震快递箱内垫、陶瓷与电子产品的抗摔防冲击缓冲保护。"
    }
  }
];

// Language Dictionary Mappings
const translations = {
  vi: {
    // Navigation
    "nav-home": "Trang Chủ",
    "nav-about": "Giới Thiệu",
    "nav-products": "Sản Phẩm",
    "nav-contact": "Liên Hệ",
    "quick-call": "Hỗ trợ 24/7:",
    
    // Homepage
    "hero-title-main": "Giải Pháp Băng Dính <span>Chuyên Nghiệp</span> Cho Doanh Nghiệp",
    "hero-desc-main": "BaDiVi cung cấp các giải pháp kết dính công nghiệp chất lượng cao, màng bảo vệ và màng co nhiệt đa dạng, tối ưu hóa quy trình đóng gói và bảo vệ sản phẩm tốt nhất.",
    "hero-cta-catalog": "Xem Sản Phẩm",
    "hero-cta-quote": "Yêu Cầu Báo Giá",
    
    "feat-quality-title": "Chất Lượng Vượt Trội",
    "feat-quality-desc": "Sử dụng nhựa nguyên sinh và hệ keo acrylic, cao su tự nhiên cao cấp chịu lực, chịu nhiệt vượt trội.",
    "feat-custom-title": "Thiết Kế In Logo",
    "feat-custom-desc": "Tùy biến in thương hiệu trực tiếp lên băng dính với độ sắc nét cao giúp quảng bá nhãn hàng tối ưu.",
    "feat-tech-title": "Sản Xuất Hiện Đại",
    "feat-tech-desc": "Hệ thống nhà máy vận hành tự động, công suất hàng chục tấn/ngày đáp ứng các đơn hàng quy mô.",
    
    "stats-experience": "Năm Kinh Nghiệm",
    "stats-capacity": "Tấn/Năm Công Suất",
    "stats-partners": "Đối Tác Lớn",
    "stats-satisfaction": "Khách Hàng Hài Lòng",
    
    "teaser-title": "Về Chúng Tôi - Băng Dính BaDiVi",
    "teaser-desc": "Công ty BaDiVi (Băng Dính Việt) là nhà sản xuất hàng đầu trong lĩnh vực sản xuất băng dính kỹ thuật, băng dính đóng gói và màng bảo vệ bề mặt PE chất lượng cao. Với máy móc hiện đại và công nghệ tiên tiến, chúng tôi cam kết mang lại sản phẩm đạt chuẩn quốc tế cùng chi phí tối ưu nhất.",
    "teaser-feat-1": "Nhà máy khép kín",
    "teaser-feat-2": "Độ bám dính siêu việt",
    "teaser-feat-3": "Trực tiếp sản xuất",
    "teaser-feat-4": "Giao hàng nhanh toàn quốc",
    "teaser-more": "Đọc Thêm Về Chúng Tôi",
    
    "featured-title": "Sản Phẩm Nổi Bật",
    "featured-subtitle": "Khám phá các sản phẩm kết dính đóng gói và bảo vệ công nghiệp bán chạy nhất của BaDiVi",
    "featured-more": "Xem Toàn Bộ Danh Mục",
    
    "cta-title": "Bạn Cần Sản Phẩm Băng Dính Theo Yêu Cầu Riêng?",
    "cta-desc": "Chúng tôi sản xuất băng dính in logo, cắt cuộn theo bản rộng/độ dày mong muốn của khách hàng với chi phí xuất xưởng cạnh tranh nhất.",
    "cta-btn": "Nhận Tư Vấn Miễn Phí",
    
    // About Page
    "about-title": "Về BaDiVi",
    "about-subtitle": "Đối tác kết dính tin cậy cho hàng ngàn doanh nghiệp trên toàn quốc",
    "history-title": "Lịch Sử & Tầm Nhìn Phát Triển",
    "history-p1": "Được xây dựng từ định hướng tạo dựng thương hiệu băng dính quốc gia chất lượng vượt trội, BaDiVi (Băng Dính Việt) luôn tự hào là đơn vị tiên phong trong lĩnh vực sản xuất băng keo và màng bảo vệ kỹ thuật. Chúng tôi không ngừng đầu tư các dây chuyền tráng keo, phân cuộn tự động nhập khẩu nhằm đáp ứng các đòi hỏi kỹ thuật gắt gao nhất từ các khách hàng FDI.",
    "history-p2": "Tầm nhìn của chúng tôi là trở thành thương hiệu sản phẩm đóng gói phụ trợ công nghiệp số 1 tại Việt Nam và vươn tầm xuất khẩu sang các thị trường khu vực, xây dựng hệ sinh thái đóng gói xanh và thân thiện với môi trường.",
    "value-title-main": "Giá Trị Cốt Lõi",
    "value-desc-main": "Kim chỉ nam cho mọi hoạt động sản xuất và vận hành tại BaDiVi",
    "value-1-title": "Chất Lượng Tiên Phong",
    "value-1-desc": "Mỗi cuộn băng dính xuất xưởng đều được kiểm định lực dính, độ kéo đứt và độ dày keo nghiêm ngặt.",
    "value-2-title": "Vì Khách Hàng",
    "value-2-desc": "Luôn lắng nghe, thấu hiểu khó khăn và tối ưu hóa giải pháp đóng gói tiết kiệm chi phí nhất cho bạn.",
    "value-3-title": "Đổi Mới Sáng Tạo",
    "value-3-desc": "Nghiên cứu các hệ keo chịu nhiệt cực cao và các màng tự hủy sinh học bảo vệ môi trường xanh.",
    
    // Products Page
    "catalog-title": "Danh Mục Sản Phẩm BaDiVi",
    "catalog-subtitle": "Hệ thống sản phẩm kết dính đa dạng phục vụ đóng gói, công nghiệp và bảo vệ bề mặt",
    "search-placeholder": "Tìm kiếm sản phẩm...",
    "tab-all": "Tất Cả",
    "tab-bopp": "Băng Dính Đóng Gói",
    "tab-industrial": "Băng Dính Kỹ Thuật",
    "tab-specialty": "Băng Dính 2 Mặt / Đặc Thù",
    "tab-films": "Màng PE & Bảo Vệ",
    
    // Contact Page
    "contact-title": "Liên Hệ Với Chúng Tôi",
    "contact-subtitle": "Đội ngũ kinh doanh của BaDiVi luôn sẵn sàng hỗ trợ báo giá và tư vấn kỹ thuật nhanh chóng",
    "info-title": "Thông Tin Liên Hệ",
    "info-desc": "Gửi yêu cầu hoặc liên hệ trực tiếp văn phòng đại diện / nhà máy sản xuất của chúng tôi.",
    "info-addr-title": "Địa Chỉ Nhà Máy & VP",
    "info-addr-desc": "Hồng Thái - An Dương - Hải Phòng",
    "info-phone-title": "Hotline Kinh Doanh",
    "info-phone-desc": "0377 689 866 (Hỗ trợ 24/7)",
    "info-email-title": "Hòm Thư Điện Tử",
    "info-email-desc": "sales@badivi.vn | info@badivi.vn",
    "form-title": "Gửi Yêu Cầu Báo Giá Nhanh",
    "form-name": "Họ và Tên",
    "form-phone": "Số Điện Thoại",
    "form-email": "Địa Chỉ Email",
    "form-company": "Tên Công Ty",
    "form-subject": "Sản Phẩm Quan Tâm",
    "form-msg": "Nội Dung Yêu Cầu (Kích thước, độ dày, số lượng...)",
    "form-send": "Gửi Yêu Cầu Ngay",
    
    // Footer
    "foot-desc": "Công ty BaDiVi chuyên sản xuất và phân phối các loại băng dính công nghiệp, băng keo đóng gói và màng bảo vệ bề mặt PE đạt chuẩn xuất khẩu.",
    "foot-quick": "Liên Kết Nhanh",
    "foot-products": "Dòng Sản Phẩm",
    "foot-info": "Hỗ Trợ Khách Hàng",
    "foot-copy": "© 2026 BaDiVi. Tất cả quyền được bảo lưu. Thiết kế bởi Antigravity.",
    
    // Modal & Toast
    "modal-spec-title": "Thông Số Kỹ Thuật",
    "modal-spec-structure": "Cấu tạo chi tiết",
    "modal-spec-color": "Màu sắc sản phẩm",
    "modal-spec-size": "Thông số quy cách",
    "modal-spec-app": "Ứng dụng thực tế",
    "modal-btn-quote": "Liên Hệ Báo Giá Sản Phẩm Này",
    "toast-success": "Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ lại trong vòng 30 phút.",
    "quote-popup-title": "Yêu cầu báo giá sản phẩm:"
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-about": "About",
    "nav-products": "Products",
    "nav-contact": "Contact",
    "quick-call": "Support 24/7:",
    
    // Homepage
    "hero-title-main": "Professional <span>Adhesive Solutions</span> For Industries",
    "hero-desc-main": "BaDiVi provides high-quality industrial adhesive tapes, protective films, and shrink packaging wraps, optimizing your logistics and product protection workflows.",
    "hero-cta-catalog": "Explore Catalog",
    "hero-cta-quote": "Request Quote",
    
    "feat-quality-title": "Premium Quality",
    "feat-quality-desc": "Utilizing virgin resins and high-grade acrylic or natural rubber adhesives for high adhesion and durability.",
    "feat-custom-title": "Custom Printed Logo",
    "feat-custom-desc": "Customize branded tapes with crisp print details to enhance your brand visibility and logistics tracking.",
    "feat-tech-title": "Advanced Factory",
    "feat-tech-desc": "Modern automated production lines with high output capacity to fulfill large wholesale orders.",
    
    "stats-experience": "Years Experience",
    "stats-capacity": "Tons/Year Capacity",
    "stats-partners": "Major Partners",
    "stats-satisfaction": "Happy Clients",
    
    "teaser-title": "About Us - BaDiVi Adhesive Tapes",
    "teaser-desc": "BaDiVi (Viet Tape Company) is a premier manufacturer specializing in industrial, packaging, and surface protection PE films. Powered by advanced machinery, we deliver international-grade adhesive products with highly optimized costs.",
    "teaser-feat-1": "Full-cycle Factory",
    "teaser-feat-2": "High-tack Performance",
    "teaser-feat-3": "Direct Manufacturer",
    "teaser-feat-4": "Fast Worldwide Shipping",
    "teaser-more": "Read More About Us",
    
    "featured-title": "Featured Products",
    "featured-subtitle": "Discover BaDiVi's bestselling industrial packaging and surface protection solutions",
    "featured-more": "View All Products",
    
    "cta-title": "Need Branded Tapes Or Custom Sizes?",
    "cta-desc": "We manufacture customized printed tapes and cut custom roll widths/lengths with competitive ex-factory pricing.",
    "cta-btn": "Get Free Consultation",
    
    // About Page
    "about-title": "About BaDiVi",
    "about-subtitle": "Trusted adhesive partner for thousands of businesses globally",
    "history-title": "History & Vision",
    "history-p1": "Established to build a national brand with global quality, BaDiVi takes pride in pioneering technical adhesive tapes and surface protection films. We constantly upgrade our imported coating and slitting production lines to meet the strict technical standards of FDI manufacturers.",
    "history-p2": "Our vision is to become the leading provider of auxiliary packaging products in Vietnam and expand exports to regional markets, driving a green and sustainable packaging ecosystem.",
    "value-title-main": "Core Values",
    "value-desc-main": "The principles guiding every manufacturing and operational process at BaDiVi",
    "value-1-title": "Quality Leadership",
    "value-1-desc": "Every roll undergoes strict quality control checks for adhesion level, tensile strength, and adhesive thickness.",
    "value-2-title": "Customer Centricity",
    "value-2-desc": "We listen, analyze issues, and engineer the most cost-effective packaging solutions for your budget.",
    "value-3-title": "Continuous Innovation",
    "value-3-desc": "We research high-temperature resistance adhesives and biodegradable films for a green ecosystem.",
    
    // Products Page
    "catalog-title": "BaDiVi Product Catalog",
    "catalog-subtitle": "Diverse adhesive products serving packaging, industrial assembly, and surface protection",
    "search-placeholder": "Search products...",
    "tab-all": "All Products",
    "tab-bopp": "BOPP Packaging Tapes",
    "tab-industrial": "Technical/Industrial Tapes",
    "tab-specialty": "Double Sided / Specialty",
    "tab-films": "PE & Protective Films",
    
    // Contact Page
    "contact-title": "Contact Us",
    "contact-subtitle": "BaDiVi's sales team is ready to provide fast quotations and technical support",
    "info-title": "Contact Information",
    "info-desc": "Send an inquiry or visit our local representative office or manufacturing plant.",
    "info-addr-title": "Factory & HQ Address",
    "info-addr-desc": "Hong Thai - An Duong - Hai Phong",
    "info-phone-title": "Business Hotline",
    "info-phone-desc": "+84 377 689 866 (24/7 Support)",
    "info-email-title": "Email Address",
    "info-email-desc": "sales@badivi.vn | info@badivi.vn",
    "form-title": "Request Quick Quotation",
    "form-name": "Full Name",
    "form-phone": "Phone Number",
    "form-email": "Email Address",
    "form-company": "Company Name",
    "form-subject": "Product of Interest",
    "form-msg": "Your Message (dimensions, thickness, quantity...)",
    "form-send": "Submit Inquiry",
    
    // Footer
    "foot-desc": "BaDiVi specializes in manufacturing and exporting industrial adhesive tapes, packaging tapes, and PE protective films.",
    "foot-quick": "Quick Links",
    "foot-products": "Product Categories",
    "foot-info": "Customer Care",
    "foot-copy": "© 2026 BaDiVi. All rights reserved. Created by Antigravity.",
    
    // Modal & Toast
    "modal-spec-title": "Technical Specifications",
    "modal-spec-structure": "Material Structure",
    "modal-spec-color": "Available Colors",
    "modal-spec-size": "Standard Sizes",
    "modal-spec-app": "Main Applications",
    "modal-btn-quote": "Request Quote for this Product",
    "toast-success": "Inquiry submitted successfully! We will contact you within 30 minutes.",
    "quote-popup-title": "Request Quote for:"
  },
  zh: {
    // Navigation
    "nav-home": "首页",
    "nav-about": "关于我们",
    "nav-products": "产品中心",
    "nav-contact": "联系我们",
    "quick-call": "全天候服务:",
    
    // Homepage
    "hero-title-main": "工业级 <span>胶带粘接方案</span> 生产制造商",
    "hero-desc-main": "BaDiVi 生产高品质工业胶带、PE表面防刮保护膜及热收缩包装膜，为物流包装及产品运输安全保驾护航。",
    "hero-cta-catalog": "浏览产品",
    "hero-cta-quote": "索取报价",
    
    "feat-quality-title": "卓越品质",
    "feat-quality-desc": "使用全新聚乙烯粒子及进口丙烯酸、天然橡胶压敏胶，粘力超强，经久耐拉。",
    "feat-custom-title": "定制企业Logo",
    "feat-custom-desc": "利用专业铜版技术为企业印制Logo胶带，提升包装品牌辨识度及防盗防伪。",
    "feat-tech-title": "现代化厂房",
    "feat-tech-desc": "引入全自动高速涂布与分切生产线，日产量数十吨，满足大规模大宗订单采购。",
    
    "stats-experience": "年行业经验",
    "stats-capacity": "吨/年设计产能",
    "stats-partners": "合作大厂",
    "stats-satisfaction": "客户好评率",
    
    "teaser-title": "关于我们 - BaDiVi 胶带制造厂",
    "teaser-desc": "BaDiVi（越南胶带公司）是本土领先的高端包装胶带和PE保护膜生产厂家。我们配备了先进的全自动涂布机，致力于为客户提供达到国际标准的优质胶粘产品，并确保成本优化。",
    "teaser-feat-1": "自建封网式厂房",
    "teaser-feat-2": "高粘稳固性能",
    "teaser-feat-3": "厂家直销出厂价",
    "teaser-feat-4": "全球快速发货",
    "teaser-more": "详细了解我们",
    
    "featured-title": "明星/畅销产品",
    "featured-subtitle": "探索 BaDiVi 销量最高的工业封箱包装和表面防刮保护膜系列产品",
    "featured-more": "查看完整产品目录",
    
    "cta-title": "您需要特殊规格或印字Logo胶带吗？",
    "cta-desc": "我们专业定制印刷企业商标胶带，并按您需要的厚度、宽度进行精密裁切，价格极其优惠。",
    "cta-btn": "获取免费咨询",
    
    // About Page
    "about-title": "关于 BaDiVi",
    "about-subtitle": "全国数千家企业信赖的工业胶粘合作伙伴",
    "history-title": "企业历史与发展愿景",
    "history-p1": "BaDiVi 以打造高品质越南自主品牌为初衷，在技术型胶粘制品和表面保护膜领域深耕多年。我们不断更新从国外引进的涂布、复卷及全自动分条分切设备，以满足外资企业（FDI）及高精电子行业严格的技术指标。",
    "history-p2": "我们的发展愿景是成为越南及东南亚区域首屈一指的工业包装辅料供应商，建立绿色、环保和可持续的包装产品生态圈。",
    "value-title-main": "核心价值观",
    "value-desc-main": "BaDiVi 生产制造与运营管理的根本遵循",
    "value-1-title": "品质第一",
    "value-1-desc": "每一卷胶带出厂前必须通过剥离力、拉伸强度及胶层厚度的严格检测。",
    "value-2-title": "客户至上",
    "value-2-desc": "聆听客户诉求，针对不同包装表面提供最实惠、有效的包装连接方案。",
    "value-3-title": "持续创新",
    "value-3-desc": "致力于超高温电气绝缘胶带和环保生物降解材料的研究与开发体系。",
    
    // Products Page
    "catalog-title": "BaDiVi 产品中心",
    "catalog-subtitle": "丰富多样的封箱胶带、特种工业双面胶及表面防刮防护膜产品",
    "search-placeholder": "搜索产品...",
    "tab-all": "全部产品",
    "tab-bopp": "封箱/包装胶带",
    "tab-industrial": "工业/技术胶带",
    "tab-specialty": "双面/特种胶带",
    "tab-films": "PE膜与气泡膜",
    
    // Contact Page
    "contact-title": "联系我们",
    "contact-subtitle": "BaDiVi 商务销售团队全天候为您提供快速的产品报价与技术规范咨询",
    "info-title": "联系方式",
    "info-desc": "如果您有任何大宗采购或定制规格需求，请填写表单或直接与我们的工厂取得联系。",
    "info-addr-title": "厂址与总部地址",
    "info-addr-desc": "红泰 - 安阳 - 海防",
    "info-phone-title": "销售客服专线",
    "info-phone-desc": "+84 377 689 866 (24小时支持)",
    "info-email-title": "企业电子邮箱",
    "info-email-desc": "sales@badivi.vn | info@badivi.vn",
    "form-title": "快速获取产品报价",
    "form-name": "您的姓名",
    "form-phone": "联系电话",
    "form-email": "电子邮箱",
    "form-company": "公司名称",
    "form-subject": "感兴趣的产品",
    "form-msg": "详细采购说明 (宽度, 厚度, 采购量...)",
    "form-send": "提交报价申请",
    
    // Footer
    "foot-desc": "BaDiVi 胶带公司专业研发、生产与销售符合出口标准的工业封箱胶带、特种胶带和PE保护膜。",
    "foot-quick": "快速链接",
    "foot-products": "产品类别",
    "foot-info": "客户服务",
    "foot-copy": "© 2026 BaDiVi. 保留所有权利。 由 Antigravity 强力驱动。",
    
    // Modal & Toast
    "modal-spec-title": "产品规格参数",
    "modal-spec-structure": "产品详细构造",
    "modal-spec-color": "供货颜色",
    "modal-spec-size": "常用规格尺寸",
    "modal-spec-app": "应用领域",
    "modal-btn-quote": "索取本产品大宗报价",
    "toast-success": "报价申请已成功发送！我们的经理将在 30 分钟内与您联系。",
    "quote-popup-title": "索取报价产品:"
  }
};

// State Variables
let currentLang = localStorage.getItem("badivi_lang") || "vi";

// Dynamic Navigation Highlights
function highlightNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (currentPath.includes(href) && href !== "index.html") {
      link.classList.add("active");
    } else if (currentPath.endsWith("/") || currentPath.endsWith("index.html")) {
      if (href === "index.html") {
        link.classList.add("active");
      }
    }
  });
}

// Translate Page DOM Elements
function translatePage() {
  localStorage.setItem("badivi_lang", currentLang);
  
  // Highlight active language button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", currentLang);

  // Translate basic keys
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      if (elem.tagName === "INPUT" || elem.tagName === "TEXTAREA") {
        elem.setAttribute("placeholder", translations[currentLang][key]);
      } else {
        elem.innerHTML = translations[currentLang][key];
      }
    }
  });

  // Re-render product catalogs if function exists
  if (typeof renderProducts === "function") {
    renderProducts();
  }
  if (typeof renderFeaturedProducts === "function") {
    renderFeaturedProducts();
  }
}

// Switch Language handler
function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    translatePage();
  }
}

// Global UI Events
document.addEventListener("DOMContentLoaded", () => {
  highlightNav();
  translatePage();
  
  // Header scroll sticky background change
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  // Mobile Nav Toggle
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      // Simple icon toggle
      const svg = navToggle.querySelector("svg");
      if (navMenu.classList.contains("active")) {
        svg.innerHTML = `<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>`;
      } else {
        svg.innerHTML = `<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`;
      }
    });
  }

  // Smooth scroll animations trigger
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  const checkVisibility = () => {
    animatedElements.forEach(elem => {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        elem.classList.add("animated");
      }
    });
  };
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // initial check

  // Generic contact form action
  const contactForm = document.getElementById("badivi-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Toast notification
      showToast(translations[currentLang]["toast-success"]);
      contactForm.reset();
    });
  }
});

// Toast notification helper
function showToast(message) {
  // Check if existing toast
  let toast = document.querySelector(".toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notification";
    
    // Style Toast
    Object.assign(toast.style, {
      position: "fixed",
      bottom: "110px",
      right: "30px",
      backgroundColor: "#0f2c59",
      color: "#ffffff",
      padding: "16px 28px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      zIndex: "3000",
      fontFamily: "'Outfit', sans-serif",
      fontWeight: "600",
      borderLeft: "5px solid #ff6b35",
      opacity: "0",
      transform: "translateY(20px)",
      transition: "all 0.3s ease"
    });
    
    document.body.appendChild(toast);
  }
  
  toast.innerText = message;
  // Animate in
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 50);
  
  // Animate out
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 4000);
}

// Product Details Modal controls
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-detail-modal");
  if (!modal) return;

  const details = product[currentLang];
  
  // Fill text
  modal.querySelector(".modal-title").innerText = details.name;
  modal.querySelector(".modal-category-badge").innerText = product.badge[currentLang];
  
  // Specs table body
  const tbody = modal.querySelector(".specs-table tbody");
  tbody.innerHTML = `
    <tr>
      <th>${translations[currentLang]["modal-spec-structure"]}</th>
      <td>${details.structure}</td>
    </tr>
    <tr>
      <th>${translations[currentLang]["modal-spec-color"]}</th>
      <td>${details.colors}</td>
    </tr>
    <tr>
      <th>${translations[currentLang]["modal-spec-size"]}</th>
      <td>${details.specs}</td>
    </tr>
    <tr>
      <th>${translations[currentLang]["modal-spec-app"]}</th>
      <td>${details.apps}</td>
    </tr>
  `;

  // Modal actions
  const quoteBtn = modal.querySelector(".modal-quote-btn");
  quoteBtn.innerHTML = translations[currentLang]["modal-btn-quote"];
  quoteBtn.onclick = () => {
    closeProductModal();
    openQuoteRequest(details.name);
  };
  
  // Activate modal
  modal.classList.add("active");
}

function closeProductModal() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.remove("active");
  }
}

// Quote Request Popup Overlay
function openQuoteRequest(productName = "") {
  let quoteModal = document.getElementById("quote-request-modal");
  if (!quoteModal) {
    // Generate modal dynamically
    quoteModal = document.createElement("div");
    quoteModal.id = "quote-request-modal";
    quoteModal.className = "modal";
    
    quoteModal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="closeQuoteRequest()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <h3 class="modal-title" style="margin-bottom: 20px;" id="quote-modal-title">Request Quote</h3>
        <form id="quote-modal-form">
          <div class="quote-form-group">
            <label class="quote-form-label" data-i18n="form-name">Name</label>
            <input type="text" class="quote-form-control" required>
          </div>
          <div class="quote-form-group">
            <label class="quote-form-label" data-i18n="form-phone">Phone</label>
            <input type="text" class="quote-form-control" required>
          </div>
          <div class="quote-form-group">
            <label class="quote-form-label" data-i18n="form-email">Email</label>
            <input type="email" class="quote-form-control">
          </div>
          <div class="quote-form-group">
            <label class="quote-form-label" data-i18n="form-msg">Requirements</label>
            <textarea class="quote-form-control" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-secondary" style="width: 100%; margin-top: 10px;" data-i18n="form-send">Submit Request</button>
        </form>
      </div>
    `;
    
    document.body.appendChild(quoteModal);
    
    // Form action
    const form = quoteModal.querySelector("#quote-modal-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      closeQuoteRequest();
      showToast(translations[currentLang]["toast-success"]);
      form.reset();
    });
  }

  // Pre-populate product details
  const titleText = productName 
    ? `${translations[currentLang]["quote-popup-title"]} ${productName}`
    : translations[currentLang]["form-title"];
    
  quoteModal.querySelector("#quote-modal-title").innerText = titleText;
  
  // Re-translate labels
  quoteModal.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      elem.innerText = translations[currentLang][key];
    }
  });

  quoteModal.classList.add("active");
}

function closeQuoteRequest() {
  const quoteModal = document.getElementById("quote-request-modal");
  if (quoteModal) {
    quoteModal.classList.remove("active");
  }
}
