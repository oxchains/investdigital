package com.oxchains.investdigital.entity.strategy.vo;

import lombok.Data;

/**
 * Created by xuqi on 2017/12/13.
 */
@Data
public class Pojo {
    private Long userId;
    private Integer pageNum;
    private Integer pageSize;
    private String desc;
    private Long strategyId;

    private long beginTime;
    private long endTime;

}