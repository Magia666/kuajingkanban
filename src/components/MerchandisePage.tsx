import React, { useState, useMemo } from 'react';
import { 
  Tabs as AntTabs, 
  Input, 
  Button, 
  Space, 
  Card as AntCard, 
  Tag, 
  Row, 
  Col, 
  Badge, 
  Select as AntSelect, 
  Table as AntTable, 
  Modal as AntModal, 
  message, 
  Tooltip, 
  Pagination as AntPagination, 
  Statistic, 
  Divider,
  InputNumber
} from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';

const Card: any = AntCard;
const Modal: any = AntModal;
const Table: any = AntTable;
const Tabs: any = AntTabs;
const Select: any = AntSelect;
const Pagination: any = AntPagination;
import { 
  SearchOutlined, 
  AppstoreOutlined, 
  UnorderedListOutlined, 
  FireOutlined, 
  ThunderboltOutlined, 
  SafetyCertificateOutlined, 
  ShopOutlined, 
  SendOutlined, 
  EyeOutlined, 
  PlusOutlined, 
  CheckCircleFilled,
  GlobalOutlined,
  DollarOutlined,
  StarFilled,
  ReloadOutlined,
  ExportOutlined,
  ShareAltOutlined
} from '@ant-design/icons';

interface ProductItem {
  id: string;
  spu: string;
  name: string;
  category: string;
  type: string;
  country: string;
  warehouse: string;
  image: string;
  supplyPrice: number;
  suggestedPrice: number;
  localSuggested: string;
  stock: number;
  sales30d: number;
  rating: number;
  supplier: string;
  deliveryTime: string;
  tags: string[];
  skus: { spec: string; price: number; stock: number }[];
}

const mockProducts: ProductItem[] = [
  {
    id: 'P-1001',
    spu: 'SPU-3C-89102',
    name: '2024新款智能运动手表 心率血氧监测 蓝牙通话 50米防水',
    category: '手表',
    type: '十象精选',
    country: '马来',
    warehouse: '马来吉隆坡仓',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 48.5,
    suggestedPrice: 129.0,
    localSuggested: 'RM 85.00',
    stock: 2480,
    sales30d: 3840,
    rating: 4.9,
    supplier: '深圳创芯智能工贸',
    deliveryTime: '24小时极速出库',
    tags: ['十象精选', '海外现货', '爆款推荐', '一件代发'],
    skus: [
      { spec: '曜石黑 / 氟橡胶表带', price: 48.5, stock: 1200 },
      { spec: '银霜白 / 皮质表带', price: 52.0, stock: 850 },
      { spec: '星光金 / 米兰尼斯钢带', price: 55.0, stock: 430 }
    ]
  },
  {
    id: 'P-1002',
    spu: 'SPU-3C-77401',
    name: '主动降噪ANC无线蓝牙耳机 半入耳超长续航 游戏低延迟',
    category: '消费电子',
    type: '最热销产品',
    country: '泰国',
    warehouse: '泰国曼谷仓',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 36.0,
    suggestedPrice: 99.0,
    localSuggested: 'THB 499',
    stock: 1850,
    sales30d: 5120,
    rating: 4.8,
    supplier: '东莞市欧斯特声学科技',
    deliveryTime: '24小时极速出库',
    tags: ['最热销产品', '本土免税', '高毛利'],
    skus: [
      { spec: '曜石黑 / 标准版', price: 36.0, stock: 950 },
      { spec: '珍珠白 / 空间音频版', price: 39.0, stock: 900 }
    ]
  },
  {
    id: 'P-1003',
    spu: 'SPU-3C-55209',
    name: '磁吸无线充移动电源 10000mAh 带数显 快充超薄便携',
    category: '手机/手机配件',
    type: '十象精选',
    country: '新加坡',
    warehouse: '新加坡保税仓',
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 42.0,
    suggestedPrice: 119.0,
    localSuggested: 'SGD 24.50',
    stock: 960,
    sales30d: 2180,
    rating: 4.9,
    supplier: '广州安能数码优选',
    deliveryTime: '当日发货',
    tags: ['十象精选', '一件代发', '认证齐全'],
    skus: [
      { spec: '暗夜绿 / 10000mAh', price: 42.0, stock: 520 },
      { spec: '深空灰 / 10000mAh', price: 42.0, stock: 440 }
    ]
  },
  {
    id: 'P-1004',
    spu: 'SPU-DIG-33012',
    name: '65W GaN氮化镓多口折叠充电头 兼容苹果/安卓/笔记本',
    category: '消费电子',
    type: '最新产品',
    country: '马来',
    warehouse: '马来吉隆坡仓',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 28.5,
    suggestedPrice: 79.0,
    localSuggested: 'RM 55.00',
    stock: 3100,
    sales30d: 1890,
    rating: 4.8,
    supplier: '深圳市电小二实业',
    deliveryTime: '24小时出库',
    tags: ['最新产品', '海外现货', '低售后'],
    skus: [
      { spec: '2C1A / 珍珠白', price: 28.5, stock: 1600 },
      { spec: '2C1A / 磨砂黑', price: 28.5, stock: 1500 }
    ]
  },
  {
    id: 'P-1005',
    spu: 'SPU-HOME-44091',
    name: '家用便携真空保鲜机 强劲大吸力 附赠保鲜袋干湿两用',
    category: '家具百货',
    type: '视频专区',
    country: '菲律宾',
    warehouse: '马尼拉仓',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 32.0,
    suggestedPrice: 89.0,
    localSuggested: 'PHP 680',
    stock: 1420,
    sales30d: 2750,
    rating: 4.7,
    supplier: '佛山市顺德家电工贸',
    deliveryTime: '48小时出库',
    tags: ['视频专区', '爆款带货', '一件代发'],
    skus: [
      { spec: '典雅白 (标配10袋)', price: 32.0, stock: 800 },
      { spec: '高级绿 (豪华套装30袋)', price: 38.0, stock: 620 }
    ]
  },
  {
    id: 'P-1006',
    spu: 'SPU-OUT-66710',
    name: '户外超轻折叠露营椅 便携钓鱼休闲野餐写生月亮椅',
    category: '户外运动/娱乐',
    type: '最热销产品',
    country: '印尼',
    warehouse: '雅加达仓',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 35.0,
    suggestedPrice: 95.0,
    localSuggested: 'IDR 210,000',
    stock: 2150,
    sales30d: 4320,
    rating: 4.9,
    supplier: '义乌市探路野营装备',
    deliveryTime: '24小时出库',
    tags: ['最热销产品', '高回购率', '海外现货'],
    skus: [
      { spec: '军绿色 (超强承重)', price: 35.0, stock: 1100 },
      { spec: '卡其色 (轻便便携)', price: 35.0, stock: 1050 }
    ]
  },
  {
    id: 'P-1007',
    spu: 'SPU-CAR-90812',
    name: '车载全自动无线充手机支架 电动感应夹紧 15W快充防晃',
    category: '汽车用品/汽配',
    type: '十象精选',
    country: '越南',
    warehouse: '河内仓',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 26.5,
    suggestedPrice: 69.0,
    localSuggested: 'VND 240,000',
    stock: 1980,
    sales30d: 3670,
    rating: 4.8,
    supplier: '东莞市车联创智电子',
    deliveryTime: '当日发货',
    tags: ['十象精选', '热销爆款', '一件代发'],
    skus: [
      { spec: '出风口款 / 曜石黑', price: 26.5, stock: 1200 },
      { spec: '仪表台吸盘款 / 曜石黑', price: 29.5, stock: 780 }
    ]
  },
  {
    id: 'P-1008',
    spu: 'SPU-TOY-11920',
    name: '儿童智能遥控早教飞行球 悬浮手势感应 发光抗摔耐玩',
    category: '玩具',
    type: '最新产品',
    country: '马来',
    warehouse: '马来吉隆坡仓',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd74b508?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 19.8,
    suggestedPrice: 59.0,
    localSuggested: 'RM 39.90',
    stock: 4200,
    sales30d: 6100,
    rating: 4.9,
    supplier: '汕头市澄海玩具科技',
    deliveryTime: '24小时极速出库',
    tags: ['最新产品', '低退货率', '节日爆品'],
    skus: [
      { spec: '璀璨蓝 (带魔杖遥控)', price: 19.8, stock: 2200 },
      { spec: '中国红 (带魔杖遥控)', price: 19.8, stock: 2000 }
    ]
  },
  {
    id: 'P-1009',
    spu: 'SPU-HOME-66182',
    name: '桌面微孔超声波香薰加湿器 静音大雾量 七彩柔光夜灯',
    category: '家具百货',
    type: 'VIP专区',
    country: '泰国',
    warehouse: '泰国曼谷仓',
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 22.0,
    suggestedPrice: 65.0,
    localSuggested: 'THB 320',
    stock: 1670,
    sales30d: 2890,
    rating: 4.7,
    supplier: '深圳市洛克家居美学',
    deliveryTime: '24小时出库',
    tags: ['VIP专区', '高颜值', '一件代发'],
    skus: [
      { spec: '纯净白 / 400ml容量', price: 22.0, stock: 950 },
      { spec: '落樱粉 / 400ml容量', price: 22.0, stock: 720 }
    ]
  },
  {
    id: 'P-1010',
    spu: 'SPU-PC-44211',
    name: '人体工学铝合金可折叠笔记本支架 镂空散热 六档升降调节',
    category: '电脑/办公用品',
    type: '十象精选',
    country: '美国',
    warehouse: '洛杉矶海外仓',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 25.0,
    suggestedPrice: 79.0,
    localSuggested: 'USD 19.99',
    stock: 2800,
    sales30d: 3450,
    rating: 4.9,
    supplier: '宁波市精工五金制造',
    deliveryTime: '24小时极速出库',
    tags: ['十象精选', '海外现货', '质保一年'],
    skus: [
      { spec: '深空灰 / 铝合金加厚', price: 25.0, stock: 1500 },
      { spec: '冰晶银 / 铝合金加厚', price: 25.0, stock: 1300 }
    ]
  },
  {
    id: 'P-1011',
    spu: 'SPU-PAD-77319',
    name: '磁吸可拆卸平板保护套 带笔槽休眠防摔 适用于iPad全系',
    category: '平板/平板配件',
    type: '最热销产品',
    country: '马来',
    warehouse: '马来吉隆坡仓',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 18.5,
    suggestedPrice: 55.0,
    localSuggested: 'RM 35.00',
    stock: 3500,
    sales30d: 4980,
    rating: 4.8,
    supplier: '深圳市博悦数码保护件',
    deliveryTime: '当日发货',
    tags: ['最热销产品', '多机型兼容', '高评分'],
    skus: [
      { spec: 'iPad 10.9/Air5 (薰衣草灰)', price: 18.5, stock: 1800 },
      { spec: 'iPad Pro 11寸 (午夜黑)', price: 18.5, stock: 1700 }
    ]
  },
  {
    id: 'P-1012',
    spu: 'SPU-OUT-99120',
    name: '双层真空户外保温壶 800ml 食品级316不锈钢 24H长效锁温',
    category: '户外运动/娱乐',
    type: 'VIP专区',
    country: '日本',
    warehouse: '东京海外仓',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=80',
    supplyPrice: 38.0,
    suggestedPrice: 118.0,
    localSuggested: 'JPY 2,980',
    stock: 1120,
    sales30d: 1980,
    rating: 4.9,
    supplier: '永康市钛度精工实业',
    deliveryTime: '24小时出库',
    tags: ['VIP专区', '精品高端', '海外现货'],
    skus: [
      { spec: '磨砂黑 / 800ml带茶隔', price: 38.0, stock: 600 },
      { spec: '军工绿 / 800ml带茶隔', price: 38.0, stock: 520 }
    ]
  }
];

const MerchandisePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('merchandise');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  // Filters
  const [selectedCountry, setSelectedCountry] = useState<string>('全部');
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>('全部');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [selectedType, setSelectedType] = useState<string>('全部');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('recommend');

  // Interactive details modal
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedSkuIndex, setSelectedSkuIndex] = useState<number>(0);
  const [retailPriceInput, setRetailPriceInput] = useState<number>(0);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 8;

  const topTabs: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'merchandise', label: '货盘商品' },
  ];

  const countries = ['全部', '泰国', '马来', '菲律宾', '越南', '新加坡', '印尼', '美国', '日本', '韩国', '西班牙', '台湾'];
  const warehouses = ['全部', '马来吉隆坡仓', '泰国曼谷仓', '新加坡保税仓', '马尼拉仓', '雅加达仓', '河内仓', '洛杉矶海外仓', '东京海外仓'];
  const productCategories = ['全部', '平板/平板配件', '手机/手机配件', '电脑/办公用品', '消费电子', '玩具', '家具百货', '户外运动/娱乐', '汽车用品/汽配', '手表'];
  const productTypes = ['全部', '十象精选', '最新产品', '最热销产品', '视频专区', 'VIP专区'];

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(item => {
      if (selectedCountry !== '全部' && item.country !== selectedCountry) return false;
      if (selectedWarehouse !== '全部' && item.warehouse !== selectedWarehouse) return false;
      if (selectedCategory !== '全部' && item.category !== selectedCategory) return false;
      if (selectedType !== '全部' && item.type !== selectedType) return false;
      if (searchKeyword.trim()) {
        const kw = searchKeyword.trim().toLowerCase();
        const matchTitle = item.name.toLowerCase().includes(kw);
        const matchSpu = item.spu.toLowerCase().includes(kw);
        const matchSupplier = item.supplier.toLowerCase().includes(kw);
        if (!matchTitle && !matchSpu && !matchSupplier) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'sales') return b.sales30d - a.sales30d;
      if (sortBy === 'priceAsc') return a.supplyPrice - b.supplyPrice;
      if (sortBy === 'priceDesc') return b.supplyPrice - a.supplyPrice;
      if (sortBy === 'profit') {
        const profitA = (a.suggestedPrice - a.supplyPrice) / a.suggestedPrice;
        const profitB = (b.suggestedPrice - b.supplyPrice) / b.suggestedPrice;
        return profitB - profitA;
      }
      return 0; // default recommend
    });
  }, [selectedCountry, selectedWarehouse, selectedCategory, selectedType, searchKeyword, sortBy]);

  const pagedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage]);

  const openDetail = (prod: ProductItem) => {
    setDetailProduct(prod);
    setSelectedSkuIndex(0);
    setRetailPriceInput(prod.suggestedPrice);
    setIsDetailModalOpen(true);
  };

  const handleAddTray = (prod: ProductItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    message.success(`已将「${prod.name.substring(0, 16)}...」加入您的待铺货盘`);
  };

  const handleQuickDistribute = (prod: ProductItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    Modal.confirm({
      title: '一键铺货上架',
      content: `确定将【${prod.name}】同步铺货至已绑定的跨境店铺（Shopee/TikTok/Lazada）吗？供货底价：¥${prod.supplyPrice}`,
      okText: '确认立即上架',
      cancelText: '取消',
      onOk: () => {
        message.success(`铺货任务已生成！商品已同步推送到关联店铺，发货仓：${prod.warehouse}`);
      }
    });
  };

  const handleResetFilters = () => {
    setSelectedCountry('全部');
    setSelectedWarehouse('全部');
    setSelectedCategory('全部');
    setSelectedType('全部');
    setSearchKeyword('');
    setSortBy('recommend');
    setCurrentPage(1);
    message.info('筛选已重置');
  };

  // Table columns definition
  const tableColumns: TableColumnsType<ProductItem> = [
    {
      title: '商品信息',
      key: 'info',
      width: 320,
      render: (_, record) => (
        <div className="flex gap-3 items-center">
          <img 
            src={record.image} 
            alt={record.name} 
            className="w-16 h-16 rounded object-cover border border-slate-200 shrink-0" 
          />
          <div className="min-w-0">
            <div className="font-medium text-slate-800 text-sm line-clamp-2 hover:text-blue-600 cursor-pointer" onClick={() => openDetail(record)}>
              {record.name}
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <span>{record.spu}</span>
              <Tag color="cyan" className="scale-90 origin-left">{record.category}</Tag>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '发货信息',
      key: 'warehouse',
      width: 170,
      render: (_, record) => (
        <div className="text-xs">
          <div className="font-medium text-slate-700 flex items-center gap-1">
            <GlobalOutlined className="text-blue-500" /> {record.country} · {record.warehouse}
          </div>
          <div className="text-emerald-600 mt-0.5">{record.deliveryTime}</div>
          <div className="text-slate-400">{record.supplier}</div>
        </div>
      )
    },
    {
      title: '供货底价',
      dataIndex: 'supplyPrice',
      key: 'supplyPrice',
      width: 120,
      render: (val) => (
        <span className="font-bold text-red-500 text-base">¥{val.toFixed(2)}</span>
      )
    },
    {
      title: '建议零售价 / 利润率',
      key: 'pricing',
      width: 160,
      render: (_, record) => {
        const margin = Math.round(((record.suggestedPrice - record.supplyPrice) / record.suggestedPrice) * 100);
        return (
          <div className="text-xs">
            <div className="text-slate-600 font-medium">¥{record.suggestedPrice.toFixed(2)} ({record.localSuggested})</div>
            <div className="text-emerald-600 font-medium mt-0.5">预估毛利 ~{margin}%</div>
          </div>
        );
      }
    },
    {
      title: '海外仓库存',
      dataIndex: 'stock',
      key: 'stock',
      width: 110,
      render: (stock) => (
        <span className="font-medium text-slate-700">{stock.toLocaleString()} 件</span>
      )
    },
    {
      title: '近30天销量',
      dataIndex: 'sales30d',
      key: 'sales30d',
      width: 110,
      render: (sales) => (
        <div className="text-xs">
          <span className="font-semibold text-orange-600">{sales.toLocaleString()}</span>
          <div className="text-slate-400">已分销件数</div>
        </div>
      )
    },
    {
      title: '操作',
      key: 'action',
      width: 180,
      render: (_, record) => (
        <Space size="small">
          <Button size="small" type="primary" onClick={(e) => handleQuickDistribute(record, e)}>
            一键铺货
          </Button>
          <Button size="small" onClick={(e) => handleAddTray(record, e)}>
            入货盘
          </Button>
          <Button size="small" type="text" icon={<EyeOutlined />} onClick={() => openDetail(record)}>
            详情
          </Button>
        </Space>
      )
    }
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Top Banner Tabs */}
      <div className="flex justify-between items-center bg-white px-6 py-2 rounded-t-lg border-b border-slate-100 shadow-sm">
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab} 
          items={topTabs} 
          className="font-medium"
        />
        <div className="text-xs text-slate-500 flex items-center gap-4">
          <span>共收录供货商品 <strong className="text-blue-600 font-semibold">{mockProducts.length}</strong> 款</span>
          <span>支持多国海外仓直发 · 平台一件代发 · 自动化履约</span>
        </div>
      </div>
      
      {/* Search & Filter Header */}
      <Card className="mb-4 shadow-sm border-t-0 rounded-t-none">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b border-slate-100">
          <div className="w-full md:w-auto flex-1 max-w-xl">
            <Input.Search 
              placeholder="输入商品名称、货号、SKU或供应商进行检索..." 
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                setCurrentPage(1);
              }}
              onSearch={() => setCurrentPage(1)}
              enterButton={<Button type="primary" icon={<SearchOutlined />}>搜索货源</Button>}
              allowClear
              size="large"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button 
              type="primary" 
              className="bg-indigo-600 hover:bg-indigo-700"
              icon={<ShopOutlined />}
              onClick={() => message.info('供货商入驻通道已开放，已为您拉起供应商资质认证申请单')}
            >
              我要为供货商
            </Button>
            <Button 
              type="primary" 
              className="bg-emerald-600 hover:bg-emerald-700"
              icon={<ShareAltOutlined />}
              onClick={() => message.success('分销商授权机制已激活，可享受首单免运费福利')}
            >
              我要为分销商
            </Button>
            <Button 
              icon={<ReloadOutlined />} 
              onClick={handleResetFilters}
            >
              重置筛选
            </Button>
          </div>
        </div>

        {/* Filter criteria list */}
        <div className="space-y-3 text-sm">
          {/* Countries */}
          <div className="flex items-start">
            <span className="font-semibold text-slate-700 w-28 pt-1 shrink-0 flex items-center gap-1">
              <GlobalOutlined className="text-blue-500" /> 发货国家:
            </span>
            <Space size={[6, 6]} wrap className="flex-1">
              {countries.map(c => {
                const isActive = selectedCountry === c;
                return (
                  <Button 
                    key={c} 
                    type={isActive ? 'primary' : 'text'} 
                    size="small" 
                    className={isActive ? 'font-medium' : 'text-slate-600 hover:text-blue-600'}
                    onClick={() => {
                      setSelectedCountry(c);
                      setCurrentPage(1);
                    }}
                  >
                    {c}
                  </Button>
                );
              })}
            </Space>
          </div>

          {/* Warehouses */}
          <div className="flex items-start">
            <span className="font-semibold text-slate-700 w-28 pt-1 shrink-0 flex items-center gap-1">
              <ShopOutlined className="text-amber-500" /> 发货仓库:
            </span>
            <Space size={[6, 6]} wrap className="flex-1">
              {warehouses.map(w => {
                const isActive = selectedWarehouse === w;
                return (
                  <Button 
                    key={w} 
                    type={isActive ? 'primary' : 'text'} 
                    size="small" 
                    className={isActive ? 'font-medium' : 'text-slate-600 hover:text-blue-600'}
                    onClick={() => {
                      setSelectedWarehouse(w);
                      setCurrentPage(1);
                    }}
                  >
                    {w}
                  </Button>
                );
              })}
            </Space>
          </div>

          {/* Categories */}
          <div className="flex items-start">
            <span className="font-semibold text-slate-700 w-28 pt-1 shrink-0 flex items-center gap-1">
              <AppstoreOutlined className="text-purple-500" /> 商品分类:
            </span>
            <Space size={[6, 6]} wrap className="flex-1">
              {productCategories.map(c => {
                const isActive = selectedCategory === c;
                return (
                  <Button 
                    key={c} 
                    type={isActive ? 'primary' : 'text'} 
                    size="small" 
                    className={isActive ? 'font-medium' : 'text-slate-600 hover:text-blue-600'}
                    onClick={() => {
                      setSelectedCategory(c);
                      setCurrentPage(1);
                    }}
                  >
                    {c}
                  </Button>
                );
              })}
            </Space>
          </div>

          {/* Special Feature Types */}
          <div className="flex items-start">
            <span className="font-semibold text-slate-700 w-28 pt-1 shrink-0 flex items-center gap-1">
              <FireOutlined className="text-red-500" /> 专题专区:
            </span>
            <Space size={[6, 6]} wrap className="flex-1">
              {productTypes.map(t => {
                const isActive = selectedType === t;
                return (
                  <Button 
                    key={t} 
                    type={isActive ? 'primary' : 'text'} 
                    size="small" 
                    className={isActive ? 'font-medium' : 'text-slate-600 hover:text-blue-600'}
                    onClick={() => {
                      setSelectedType(t);
                      setCurrentPage(1);
                    }}
                  >
                    {t}
                  </Button>
                );
              })}
            </Space>

            {/* View Mode Switch & Sort */}
            <div className="ml-auto flex items-center gap-3 shrink-0">
              <Select
                value={sortBy}
                onChange={setSortBy}
                style={{ width: 130 }}
                size="small"
                options={[
                  { value: 'recommend', label: '综合推荐' },
                  { value: 'sales', label: '销量最高' },
                  { value: 'profit', label: '利润率最高' },
                  { value: 'priceAsc', label: '供货价最低' },
                  { value: 'priceDesc', label: '供货价最高' }
                ]}
              />
              <Space.Compact size="small">
                <Button 
                  icon={<AppstoreOutlined />} 
                  type={viewMode === 'grid' ? 'primary' : 'default'}
                  onClick={() => setViewMode('grid')}
                  title="网格视图"
                />
                <Button 
                  icon={<UnorderedListOutlined />} 
                  type={viewMode === 'table' ? 'primary' : 'default'}
                  onClick={() => setViewMode('table')}
                  title="列表视图"
                />
              </Space.Compact>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Product List Content */}
      {filteredProducts.length === 0 ? (
        <Card className="text-center py-20 text-gray-400 shadow-sm">
          <AppstoreOutlined style={{ fontSize: 52 }} className="mb-4 text-slate-300" />
          <p className="text-base text-slate-500 mb-2">未找到匹配的货盘商品数据</p>
          <p className="text-xs text-slate-400 mb-4">您可以尝试更换搜索关键词或重置筛选标签</p>
          <Button type="primary" onClick={handleResetFilters}>重置筛选条件</Button>
        </Card>
      ) : viewMode === 'grid' ? (
        <div>
          <Row gutter={[16, 16]}>
            {pagedProducts.map((prod) => {
              const profitMargin = Math.round(((prod.suggestedPrice - prod.supplyPrice) / prod.suggestedPrice) * 100);
              return (
                <Col xs={24} sm={12} md={8} lg={6} key={prod.id}>
                  <Card 
                    hoverable 
                    className="h-full flex flex-col overflow-hidden border-slate-200 transition-all duration-300 hover:shadow-lg group"
                    bodyStyle={{ padding: 14, display: 'flex', flexDirection: 'column', flexGrow: 1 }}
                    onClick={() => openDetail(prod)}
                  >
                    {/* Thumbnail with overlay tags */}
                    <div className="relative aspect-square w-full rounded-md overflow-hidden bg-slate-100 mb-3">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <Tag color="blue" className="shadow-xs font-medium m-0">
                          {prod.country}仓
                        </Tag>
                        {prod.type !== '全部' && (
                          <Tag color="magenta" className="shadow-xs m-0">
                            {prod.type}
                          </Tag>
                        )}
                      </div>
                      <div className="absolute top-2 right-2">
                        <Tag color="green" className="shadow-xs font-semibold m-0">
                          毛利 {profitMargin}%
                        </Tag>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white text-xs flex justify-between items-center">
                        <span className="flex items-center gap-1">
                          <StarFilled className="text-amber-400" /> {prod.rating}
                        </span>
                        <span>近30天销 {prod.sales30d} 件</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-semibold text-slate-800 text-sm line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors leading-snug h-10">
                      {prod.name}
                    </h3>

                    {/* Warehouse & Supplier */}
                    <div className="text-xs text-slate-400 mb-3 flex items-center justify-between">
                      <span className="truncate max-w-[130px]" title={prod.warehouse}>
                        📍 {prod.warehouse}
                      </span>
                      <span className="text-emerald-600 font-medium shrink-0">
                        ⚡ {prod.deliveryTime}
                      </span>
                    </div>

                    {/* Price & Margins Section */}
                    <div className="mt-auto pt-2 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-1">
                        <div>
                          <span className="text-xs text-slate-400 mr-1">供货底价</span>
                          <span className="text-lg font-bold text-red-500">¥{prod.supplyPrice.toFixed(2)}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-400 block">建议零售</span>
                          <span className="text-xs font-medium text-slate-600">¥{prod.suggestedPrice.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-400 flex justify-between items-center mb-3">
                        <span>库存: <strong className="text-slate-700">{prod.stock}</strong></span>
                        <span className="text-blue-600 font-medium">当地参标: {prod.localSuggested}</span>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
                        <Button 
                          type="primary" 
                          size="small" 
                          icon={<SendOutlined />}
                          onClick={(e) => handleQuickDistribute(prod, e)}
                          className="bg-blue-600"
                        >
                          一键铺货
                        </Button>
                        <Button 
                          size="small" 
                          icon={<PlusOutlined />}
                          onClick={(e) => handleAddTray(prod, e)}
                        >
                          入货盘
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>

          {/* Pagination */}
          <div className="mt-6 flex justify-end">
            <Pagination 
              current={currentPage}
              pageSize={pageSize}
              total={filteredProducts.length}
              onChange={(page) => setCurrentPage(page)}
              showTotal={(total) => `共 ${total} 款商品`}
              showQuickJumper
            />
          </div>
        </div>
      ) : (
        <Card className="shadow-sm">
          <Table 
            columns={tableColumns} 
            dataSource={pagedProducts}
            rowKey="id"
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: filteredProducts.length,
              onChange: (p) => setCurrentPage(p),
              showTotal: (total) => `共 ${total} 款商品`
            }}
          />
        </Card>
      )}

      {/* Product Detail Modal */}
      <Modal
        title={
          <div className="flex items-center gap-2">
            <ShopOutlined className="text-blue-600" />
            <span>货盘商品详情及铺货测算</span>
          </div>
        }
        open={isDetailModalOpen}
        onCancel={() => setIsDetailModalOpen(false)}
        width={780}
        footer={[
          <Button key="close" onClick={() => setIsDetailModalOpen(false)}>
            关闭
          </Button>,
          <Button 
            key="tray" 
            icon={<PlusOutlined />}
            onClick={() => {
              if (detailProduct) handleAddTray(detailProduct);
            }}
          >
            加入货盘
          </Button>,
          <Button 
            key="distribute" 
            type="primary" 
            icon={<SendOutlined />}
            onClick={() => {
              if (detailProduct) {
                handleQuickDistribute(detailProduct);
                setIsDetailModalOpen(false);
              }
            }}
          >
            立即铺货上架
          </Button>
        ]}
      >
        {detailProduct && (
          <div className="py-2">
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={10}>
                <img 
                  src={detailProduct.image} 
                  alt={detailProduct.name} 
                  className="w-full aspect-square object-cover rounded-lg border border-slate-200 shadow-xs" 
                />
                <div className="mt-3 flex gap-2 flex-wrap">
                  {detailProduct.tags.map(t => (
                    <Tag key={t} color="blue">{t}</Tag>
                  ))}
                </div>
              </Col>
              
              <Col xs={24} sm={14}>
                <div className="text-xs text-slate-400 mb-1 flex items-center gap-2">
                  <span>货号SPU: {detailProduct.spu}</span>
                  <span>|</span>
                  <span>类目: {detailProduct.category}</span>
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-3">
                  {detailProduct.name}
                </h2>

                <div className="bg-slate-50 p-3 rounded-lg mb-4 border border-slate-100">
                  <Row gutter={12}>
                    <Col span={12}>
                      <Statistic 
                        title={<span className="text-xs text-slate-500">供货底价 (一件代发)</span>} 
                        value={detailProduct.supplyPrice} 
                        precision={2} 
                        prefix="¥" 
                        valueStyle={{ color: '#ef4444', fontWeight: 'bold', fontSize: '1.25rem' }} 
                      />
                    </Col>
                    <Col span={12}>
                      <Statistic 
                        title={<span className="text-xs text-slate-500">当地建议售价</span>} 
                        value={detailProduct.localSuggested} 
                        valueStyle={{ color: '#0284c7', fontSize: '1.1rem', fontWeight: 600 }} 
                      />
                    </Col>
                  </Row>
                </div>

                <div className="space-y-2 text-xs text-slate-600 mb-4">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400">发货海外仓</span>
                    <span className="font-medium text-slate-800">{detailProduct.warehouse} ({detailProduct.country})</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400">出库时效</span>
                    <span className="font-medium text-emerald-600">{detailProduct.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400">供应商资质</span>
                    <span className="font-medium text-slate-800">{detailProduct.supplier} <Tag color="green" className="scale-75 origin-right">已验厂</Tag></span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400">海外全仓现货</span>
                    <span className="font-bold text-slate-800">{detailProduct.stock} 件</span>
                  </div>
                </div>

                {/* SKU specification options */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-slate-700 mb-2">规格型号与SKU:</div>
                  <div className="space-y-1.5">
                    {detailProduct.skus.map((sku, idx) => (
                      <div 
                        key={sku.spec} 
                        onClick={() => setSelectedSkuIndex(idx)}
                        className={`p-2 rounded border text-xs cursor-pointer flex justify-between items-center transition-all ${
                          selectedSkuIndex === idx 
                            ? 'border-blue-500 bg-blue-50/50 text-blue-900 font-medium' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span>{sku.spec}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-red-500 font-semibold">¥{sku.price.toFixed(2)}</span>
                          <span className="text-slate-400">余量:{sku.stock}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Margin profit estimation simulator */}
                <div className="bg-amber-50/70 border border-amber-200 p-3 rounded-lg text-xs">
                  <div className="font-semibold text-amber-800 mb-1 flex items-center gap-1">
                    <DollarOutlined /> 实时毛利测算器
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-slate-600">自定义售价 (¥):</span>
                    <InputNumber 
                      min={detailProduct.supplyPrice} 
                      value={retailPriceInput} 
                      onChange={(v) => setRetailPriceInput(Number(v) || detailProduct.suggestedPrice)}
                      size="small"
                      style={{ width: 90 }}
                    />
                    <div className="ml-auto text-right">
                      <span className="text-slate-500">单件预估利润: </span>
                      <strong className="text-emerald-600 font-bold text-sm">
                        +¥{(Math.max(0, retailPriceInput - detailProduct.skus[selectedSkuIndex].price)).toFixed(2)}
                      </strong>
                      <span className="text-slate-400 ml-1">
                        ({Math.round(((retailPriceInput - detailProduct.skus[selectedSkuIndex].price) / (retailPriceInput || 1)) * 100)}%)
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MerchandisePage;
