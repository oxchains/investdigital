package com.oxchains.investdigital.dao.strategy;

import com.oxchains.investdigital.entity.strategy.StrategyTags;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by xuqi on 2017/12/13.
 */
@Repository
public interface StrategyTagsDao extends CrudRepository<StrategyTags,Integer>{
}
