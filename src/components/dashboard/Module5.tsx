import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui";
import { Trophy, Medal, Award } from "lucide-react";

const getRankIcon = (index: number) => {
  if (index === 0) return <Trophy className="w-5 h-5 text-amber-500" />;
  if (index === 1) return <Medal className="w-5 h-5 text-slate-400" />;
  if (index === 2) return <Award className="w-5 h-5 text-amber-600" />;
  return <span className="w-5 h-5 flex items-center justify-center text-sm font-semibold text-slate-500">{index + 1}</span>;
};

const personalRanking = [
  { name: '王梦琪', score: '1,250 人', isSelf: false },
  { name: '林浩宇', score: '1,180 人', isSelf: false },
  { name: '张三 (我)', score: '925 人', isSelf: true },
  { name: '刘星辰', score: '810 人', isSelf: false },
  { name: '陈沐', score: '782 人', isSelf: false },
  { name: '赵佳琪', score: '740 人', isSelf: false },
  { name: '黄嘉伟', score: '722 人', isSelf: false },
  { name: '周子涵', score: '698 人', isSelf: false },
  { name: '吴宇轩', score: '680 人', isSelf: false },
  { name: '孙雨婷', score: '650 人', isSelf: false },
];

const shopRanking = [
  { name: '极速数码专营店', score: '¥ 1,284,500' },
  { name: '云上生活馆', score: '¥ 985,200' },
  { name: '星晨跨境服饰', score: '¥ 856,400' },
  { name: '绿野运动户外', score: '¥ 742,100' },
  { name: '韩系美妆代购', score: '¥ 680,500' },
  { name: '小熊母婴甄选', score: '¥ 598,000' },
  { name: '潮人街区', score: '¥ 524,600' },
  { name: '智能家居直销', score: '¥ 488,900' },
  { name: '全球零食铺', score: '¥ 456,200' },
  { name: '张三的店', score: '¥ 425,800' },
];

const productRanking = [
  { name: '无线降噪蓝牙耳机 Pro', score: '3,240 件' },
  { name: '夏季速干运动T恤', score: '2,850 件' },
  { name: '抗老紧致修护面霜', score: '2,120 件' },
  { name: '多功能护颈记忆枕', score: '1,890 件' },
  { name: '超轻碳纤维登山杖', score: '1,560 件' },
  { name: '婴幼儿纯棉连体衣', score: '1,420 件' },
  { name: '复古机械键盘 87键', score: '1,280 件' },
  { name: '高颜智能电热饭盒', score: '1,150 件' },
  { name: '无火香薰精油套装', score: '980 件' },
  { name: '加厚防滑瑜伽垫', score: '890 件' },
];

export function Rankings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <RankCard title="店铺新增会员 TOP10" data={personalRanking} />
      <RankCard title="平台店铺销售额 TOP10" data={shopRanking} isLink />
      <RankCard title="近期热门商品销量 TOP10" data={productRanking} isLink />
    </div>
  );
}

function RankCard({ title, data, isLink = false }: { title: string, data: any[], isLink?: boolean }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[480px] overflow-hidden">
        <ul className="divide-y divide-slate-100">
          {data.map((item, index) => (
            <li 
              key={index} 
              className={`flex items-center justify-between px-5 py-3.5 ${item.isSelf ? 'bg-primary-50 border-l-4 border-l-primary-500' : 'hover:bg-slate-50 transition-colors'}`}
            >
              <div className="flex items-center gap-3 w-3/4">
                <div className="w-6 flex justify-center shrink-0">
                  {getRankIcon(index)}
                </div>
                {isLink ? (
                  <span className="text-sm font-medium text-slate-700 hover:text-primary-600 cursor-pointer transition-colors truncate" title={item.name}>
                    {item.name}
                  </span>
                ) : (
                  <span className={`text-sm truncate ${item.isSelf ? 'font-bold text-primary-700' : 'font-medium text-slate-700'}`}>
                    {item.name}
                  </span>
                )}
              </div>
              <span className={`text-sm font-semibold shrink-0 ${index < 3 ? 'text-slate-800' : 'text-slate-500'}`}>
                {item.score}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
