package com.shanzhu.em.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.shanzhu.em.entity.Category;
import org.apache.ibatis.annotations.Mapper;

/**
 * 商品分类 持久层（mapper）
 *
 @15
 */
@Mapper
public interface CategoryMapper extends BaseMapper<Category> {

}
