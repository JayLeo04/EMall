package com.shanzhu.em.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.shanzhu.em.entity.OrderGoods;
import org.apache.ibatis.annotations.Mapper;

/**
 * 订单-商品关联持久层 （mapper）
 *
 @15
 */
@Mapper
public interface OrderGoodsMapper extends BaseMapper<OrderGoods> {

}
